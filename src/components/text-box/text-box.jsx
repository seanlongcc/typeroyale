const validChars =
	'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,/\'"!?@#$%^&*()_+-=<>\\|`~[]{};: ';
const validCharSet = new Set(validChars.split(''));

const TextBox = ({ passage, typed, setTyped, setReady}) => {
	
	const handleKeyDown = (e) => {
		if (e.key === 'Backspace') {
			if (typed.val.length > 0)
				setTyped({val: typed.val.slice(0, -1), attempted: typed.attempted});
			
		} else if (validCharSet.has(e.key) && typed.val.length < passage.length) {
			if (typed.val.length === 0) 
				setReady(true);
			
			setTyped({val: typed.val + e.key, attempted: typed.attempted + 1});
		}
	};

	return (
		<div
			id='text-box'
			className='outline-none text-3xl'
			tabIndex={0}
			onKeyDown={handleKeyDown}
		>
			<span>
				{/* splits passage into array of single characters and maps each character to an index */}
				{passage.split('').map((c, i) => {
					if (typed.val[i] === c) {
						return (
							<span key={i} className='text-green-500'>
								{c}
							</span>
						);
					} else if (typed.val[i]) {
						return (
							<span key={i} className='text-red-500 bg-transparent bg-red-100'>
								{c}
							</span>
						);
					} else {
						//returns the passage if nothing is typed, renders all at once
						return <span key={i}>{c}</span>;
					}
				})}
			</span>
		</div>
	);
};

export default TextBox;