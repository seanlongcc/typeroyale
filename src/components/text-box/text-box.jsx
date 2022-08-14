import Caret from '../caret/caret';
import { useState, useEffect, useCallback, useRef } from 'react';
import { updateGamesStarted } from '../../firebase/firebase';

const validChars =
	'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,/\'"!?@#$%^&*()_+-=<>\\|`~[]{};: ';
let validCharSet = new Set(validChars.split(''));

const TextBox = ({
	passage,
	typed,
	setTyped,
	ready,
	setReady,
	mode,
	progress,
	setProgress,
	duration,
}) => {
	const [textFocused, setTextFocused] = useState(false);
	const [click, setClick] = useState(false);

	let incorrect = useRef(0);

	const updatePtr = useCallback(
		(start) => {
			var [ptr, newLines, lb1, lb2] = [start, 0, 0, 0];
			while (newLines !== 3 && ptr < passage.display.length) {
				if (passage.display[ptr++] === '\n') {
					newLines += 1;
					lb1 = newLines === 1 ? ptr : lb1;
					lb2 = newLines === 2 ? ptr : lb2;
				}
			}
			return { start: start, lb1: lb1, lb2: lb2, end: ptr };
		},
		[passage]
	);

	const [passagePtr, setPassagePtr] = useState(updatePtr(0));
	const [sinceSpace, setSinceSpace] = useState(0);

	useEffect(() => {
		if (!ready) {
			setPassagePtr(updatePtr(0));
			incorrect.current = 0;
			validCharSet = new Set(validChars.split(''));
		}
	}, [ready, setPassagePtr, updatePtr, setProgress]);

	const handleKeyDown = (e) => {
		const [val, p_raw] = [typed.val, passage.raw];

		if (e.ctrlKey && e.key === 'Backspace') {
			if (
				sinceSpace < 0 &&
				(val[val.length - 1] !== ' ' || passage.raw[val.length - 1] !== ' ')
			) {
				setTyped({
					val: val.slice(0, sinceSpace),
					keysPressed: [...typed.keysPressed, { key: e.key, time: new Date() }],
					done: false,
				});
				setSinceSpace(0);
				incorrect.current = 0;
				validCharSet = new Set(validChars.split(''));
			}
		} else if (e.key === 'Backspace' && val.length > 0) {
			//BACKSPACE if previous key typed is NOT a space OR if previous character in passage is NOT a space
			if (val[val.length - 1] !== ' ' || passage.raw[val.length - 1] !== ' ') {
				setTyped({
					val: val.slice(0, -1),
					keysPressed: [...typed.keysPressed, { key: e.key, time: new Date() }],
					done: false,
				});
				if (sinceSpace <= 0) {
					setSinceSpace((sinceSpace) => sinceSpace + 1);
				}
				validCharSet = new Set(validChars.split(''));
			}

			if (
				incorrect.current > 0 &&
				val[val.length - 1] !== p_raw[val.length - 1]
			)
				incorrect.current--;
		} else if (p_raw[val.length] === ' ' && incorrect.current !== 0) {
			return;
		} else if (validCharSet.has(e.key) && val.length < p_raw.length) {
			if (val.length === 0) {
				setReady(true);
				updateGamesStarted(mode, duration);
			}
			setSinceSpace((sinceSpace) => sinceSpace - 1);
			setTyped((t) => {
				return {
					val: t.val + e.key,
					keysPressed: [...t.keysPressed, { key: e.key, time: new Date() }],
					done: t.val + e.key === p_raw,
				};
			});

			if (e.key !== p_raw[val.length]) {
				incorrect.current++;
			}

			if (val.length + 1 === passagePtr.lb2 && val.length !== passagePtr.start)
				setPassagePtr(updatePtr(passagePtr.lb1));

			//allows only space to be typed if \n is next char
			if (passage.display[val.length + 1] === '\n') {
				validCharSet = new Set(validChars.slice(-1));
			}

			// progress counter
			if (
				e.key === ' ' &&
				passage.raw[val.length - 1] !== ' ' &&
				incorrect.current === 0
			) {
				setProgress((progress) => progress + 1);
				setSinceSpace(0);
				validCharSet = new Set(validChars.split(''));
			}
		}
	};

	//changes state when clicking mouse
	onmouseup = (e) => {
		setClick(!click);
	};

	useEffect(() => {
		if (document.getElementById('text-box') === document.activeElement) {
			setTextFocused(true);
			setClick(false);
		} else {
			setTextFocused(false);
		}
	}, [textFocused, click, typed]);

	return (
		<div
			id='text-box'
			className='w-screen-md  min-w-full text-3xl box-content m-10 h-36 outline-none whitespace-pre leading-relaxed'
			tabIndex={0}
			onKeyDown={handleKeyDown}
		>
			<div className='absolute -mx-[22rem]'>
				<span>
					{passage.display
						.slice(passagePtr.start, passagePtr.end)
						.split('')
						.map((c, i) => {
							i += passagePtr.start;
							if (typed.val[i] === c) {
								return (
									<span key={i} className='text-secondary'>
										{c}
										{textFocused && i === typed.val.length - 1 && <Caret />}
									</span>
								);
							} else if (typed.val[i]) {
								//if spacebar is wrong, highlight
								if (
									passage.display[i] === ' ' &&
									typed.val[i] !== passage.display[i]
								) {
									return (
										<span key={i} className='bg-primary bg-opacity-50'>
											{c}
											{textFocused && i === typed.val.length - 1 && <Caret />}
										</span>
									);
								} else {
									return (
										<span key={i} className='text-primary'>
											{c}
											{textFocused && i === typed.val.length - 1 && <Caret />}
										</span>
									);
								}
							} else {
								//returns the passage if nothing is typed, renders all at once
								return (
									<span key={i}>
										{textFocused && typed.val.length === 0 && i === 0 && (
											<Caret />
										)}
										{c}
									</span>
								);
							}
						})}
				</span>
			</div>
		</div>
	);
};

export default TextBox;
