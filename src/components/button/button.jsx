const Button = ({ label, size, border, mode, setMode }) => {
	const styling =
		//if mode is equivalent to label, set bg to gray
		mode === label
			? `btn btn-sm text-primary btn-outline btn-primary${size} ${border}`
			: `btn btn-ghost btn-sm ${size} ${border}`;

	return (
		<button
			className={styling}
			onClick={() => setMode(label)}
			tabIndex={-1} //makes the buttons not tabbable
		>
			{label}
		</button>
	);
};

export default Button;
