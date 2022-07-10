import { useState } from 'react';

const Button = ({ label, size, border }) => {
	const [clicked, setClicked] = useState(false);
	const styling = clicked
		? `hover:text-gray-400 bg-gray-200 ${size} ${border}`
		: `hover:text-gray-400 ${size} ${border}`;

	return (
		<button className={styling} onClick={() => setClicked(!clicked)}>
			{label}
		</button>
	);
};

export default Button;
