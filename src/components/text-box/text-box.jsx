import Caret from '../caret/caret';

const validChars =
	'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,/\'"!?@#$%^&*()_+-=<>\\|`~[]{};: ';
const validCharSet = new Set(validChars.split(''));

const TextBox = ({ passage, typed, setTyped, setReady }) => {
	const handleKeyDown = (e) => {
		if (e.key === 'Backspace' && typed.val.length > 0) {
			setTyped({val: typed.val.slice(0, -1), keysPressed: [...typed.keysPressed, {key: e.key, time: new Date()}], done: false});

		} else if (validCharSet.has(e.key) && typed.val.length < passage.length) {
				if (typed.val.length === 0)
					setReady(true);

				if(typed.val + e.key === passage)
					setTyped({val: typed.val, keysPressed: typed.keysPressed, done: true});

				setTyped({val: typed.val + e.key, keysPressed: [...typed.keysPressed, {key: e.key, time: new Date()}], done: false});
		}
	};

	return (
		<div
			id='text-box'
			className='outline-none text-3xl box-content max-w-screen-md max-h-44 border-2 border-blue-500'
			tabIndex={0}
			onKeyDown={handleKeyDown}
		>
			<span>
				{/* splits passage into array of single characters and maps each character to an index */}
				{passage.split('').map((c, i) => {
					if (typed.val[i] === c) {
						return (
							<span key={i}>
								<span className='text-green-500'>
									{c}
									{i === typed.val.length - 1 && <Caret />}
								</span>
							</span>
						);
					} else if (typed.val[i]) {
						return (
							<span key={i}>
								<span className='text-red-500 bg-transparent bg-red-100'>
									{c}
									{i === typed.val.length - 1 && <Caret />}
								</span>
							</span>
						);
					} else {
						//returns the passage if nothing is typed, renders all at once
						return (
							<span key={i}>
								<span>
									{typed.val.length === 0 && i === 0 && <Caret />}
									{c}
								</span>
							</span>
						);
					}
				})}
			</span>
		</div>
	);
};

export default TextBox;
