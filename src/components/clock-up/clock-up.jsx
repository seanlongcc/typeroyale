import { useEffect, useState } from 'react';

const ClockUp = ({ ready, time, setTime }) => {
	const [fakeTime, setFakeTime] = useState(0);

	useEffect(() => {
		if (!ready) {
			setTime(0);
			setFakeTime(0);
		} else {
			const startTime = Date.now();
			const timer = setInterval(
				() => setTime((t) => ((Date.now() + 1 - startTime) / 1000).toFixed(2)),
				10
			);
			const fakeTimer = setInterval(() => setFakeTime((t) => t + 1), 1000);

			return () => {
				clearInterval(timer);
				clearInterval(fakeTimer);
			};
		}
	}, [ready, setTime]);

	return (
		<div className='text-9xl text-base-content'>{ready ? fakeTime : 0}</div>
	);
};

export default ClockUp;
