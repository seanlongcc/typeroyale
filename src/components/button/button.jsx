const Button = ({ label, size, border, mode, setMode, setReady, setTyped }) => {
	const styling =
		//if mode is equivalent to label, set bg to gray
		mode === label
			? `hover:text-gray-400 hover:animate-pulse bg-gray-200 ${size} ${border}`
			: `hover:text-gray-400 hover:animate-pulse ${size} ${border}`;

	return (
		//on click, set the mode to current label of button, styling is run after
		<button
			className={styling}
			onClick={() => {
				setMode(label);
				setReady(false);
				setTyped({ val: '', keysPressed: [], done: false });
			}}
			//makes the buttons not tabbable
			tabIndex={-1}
		>
			{label}
		</button>
	);
};

export default Button;
