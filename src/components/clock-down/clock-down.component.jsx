import { useEffect, useState } from 'react';

const ClockDown = ({ gameTime }) => {
	const [time, setTime] = useState(gameTime);

	useEffect(() => {
		setTimeout(() => {
			if (time > 0) {
				setTime(time - 1);
			}
		}, 1000);
	});

	return <div>{time}</div>;
};

export default ClockDown;
