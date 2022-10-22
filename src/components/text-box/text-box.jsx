import Caret from '../caret/caret';
import { useState, useEffect, useCallback, useRef } from 'react';
import { updateGamesStarted } from '../../firebase/firebase';
import { RiCursorFill } from 'react-icons/ri';

const validChars =
	'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,/\'"!?@#$%^&*()_+-=<>\\|`~[]{};: ';
const allCharSet = new Set(validChars.split(''));
const spaceSet = new Set(validChars.slice(-1));
let validCharSet = allCharSet;

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
	textFocused,
	setTextFocused,
}) => {
	// const [textFocused, setTextFocused] = useState(false);
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
			validCharSet = allCharSet;
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
				validCharSet = allCharSet;
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
				validCharSet = allCharSet;
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
				validCharSet = spaceSet;
			}

			// progress counter
			if (
				e.key === ' ' &&
				passage.raw[val.length - 1] !== ' ' &&
				incorrect.current === 0
			) {
				setProgress((progress) => progress + 1);
				setSinceSpace(0);
				validCharSet = allCharSet;
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
	}, [textFocused, click, typed, setTextFocused]);
	return (
		<div>
			<span
				className={
					textFocused === true ? 'hidden' : 'absolute -mx-9 mt-14 text-xl'
				}
			>
				<span>
					<RiCursorFill className='w-5 h-5 inline' />
					Click to focus
				</span>
			</span>
			<div
				id='text-box'
				className={
					textFocused === true
						? 'w-screen-md min-w-full text-3xl box-content m-10 h-36 outline-none whitespace-pre leading-relaxed'
						: 'w-screen-md min-w-full text-3xl box-content m-10 h-36 outline-none whitespace-pre leading-relaxed blur'
				}
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
		</div>
	);
};

export default TextBox;
