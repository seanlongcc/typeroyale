import { useEffect, useState } from 'react';

const ClockUp = () => {
	const [time, setTime] = useState(0);

	useEffect(() => {
		setTimeout(() => {
			setTime(time + 1);
		}, 1000);
	});

	return <div>{time}</div>;
};

export default ClockUp;
