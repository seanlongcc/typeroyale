import Caret from '../caret/caret';
import { useState, useEffect, useCallback } from 'react';

const validChars =
	'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,/\'"!?@#$%^&*()_+-=<>\\|`~[]{};: ';
const validCharSet = new Set(validChars.split(''));

const TextBox = ({ passage, typed, setTyped, ready, setReady }) => {
	const [textFocused, setTextFocused] = useState(false);
	const [click, setClick] = useState(false);

	// const updatePtr = useCallback(
	// 	(end) => {
	// 		let ptr = end;
	// 		let newLines = 0;

	// 		while(newLines !== 3 && ptr < passage.length) {
	// 			if(passage[ptr++] === "\n")
	// 				newLines += 1;	
	// 		}

	// 		return { start: end, end: ptr };
	// 	},
	// 	[passage]
	// );


	const updatePtr = useCallback(
		(end) => {
			let ptr = end;
			let newLines = 0;
			let turnPt = 0;

			while(newLines !== 3 && ptr < passage.display.length) {
				if(passage.display[ptr++] === "\n") {
					newLines += 1;
					turnPt = (newLines === 2) ? ptr : turnPt;
				}
			}

			return { start: end, turnPt: turnPt, end: ptr };
		},
		[passage]
	);

	const [passagePtr, setPassagePtr] = useState(updatePtr(0));

	useEffect(() => {
		if (!ready) setPassagePtr(updatePtr(0));
	}, [ready, setPassagePtr, updatePtr]);

	const handleKeyDown = (e) => {
		if (e.key === 'Backspace' && typed.val.length > 0) {
			setTyped({
				val: typed.val.slice(0, -1),
				keysPressed: [...typed.keysPressed, { key: e.key, time: new Date() }],
				done: false,
			});
		} else if (validCharSet.has(e.key) && typed.val.length < passage.raw.length) {
			if (typed.val.length === 0) {
				setReady(true);
			}

			setTyped((t) => {
				console.log(t.val + e.key === passage.raw)
				return {
					val: t.val + e.key,
					keysPressed: [...t.keysPressed, { key: e.key, time: new Date() }],
					done: t.val + e.key === passage.raw,
				};
			});

			if (typed.val.length + 1 === passagePtr.turnPt && typed.val.length !== passagePtr.start)
				setPassagePtr(updatePtr(passagePtr.turnPt));
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
			className='max-w-screen-md min-w-full text-3xl box-content m-10 h-36 outline-none whitespace-pre leading-relaxed'
			tabIndex={0}
			onKeyDown={handleKeyDown}
		>	
			<span>
				{passage.display
					.slice(passagePtr.start, passagePtr.end)
					.split('')
						.map((c, i) => {
							i += passagePtr.start;
							if (typed.val[i] === c) {
							return (
								<span key={i} className='text-green-500'>
									{c}
									{textFocused && i === typed.val.length - 1 && <Caret />}
								</span>
							);
						} else if (typed.val[i]) {
							return (
								<span
									key={i}
									className='text-red-500 bg-transparent bg-red-100'
								>
									{c}
									{textFocused && i === typed.val.length - 1 && <Caret />}
								</span>
							);
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
	);
};

export default TextBox;
