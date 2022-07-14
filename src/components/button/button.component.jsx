const Button = ({ label, size, border, mode, setMode }) => {
	const styling =
		//if mode is equivalent to label, set bg to gray
		mode === label
			? `hover:text-gray-400 bg-gray-200 ${size} ${border}`
			: `hover:text-gray-400 ${size} ${border}`;

	return (
		//on click, set the mode to current label of button, styling is run after
		<button className={styling} onClick={() => setMode(label)}>
			{label}
		</button>
	);
};

export default Button;
