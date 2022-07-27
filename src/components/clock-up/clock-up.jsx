import { useEffect } from 'react';

const ClockUp = ({ ready, time, setTime }) => {
	useEffect(() => {
		if (!ready) {
			setTime(0);
		} else {
			const startTime = Date.now();
			const timer = setInterval(
				() => setTime((t) => ((Date.now() + 1 - startTime) / 1000).toFixed(2)),
				10
			);
			return () => {
				clearInterval(timer);
			};
		}
	}, [ready, setTime]);

	return <div className='text-9xl'>{ready ? time : 0}</div>;
};

export default ClockUp;
