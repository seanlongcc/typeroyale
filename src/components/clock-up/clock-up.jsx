import { useEffect } from 'react';

const ClockUp3 = ({ ready, setReady, time, setTime }) => {
	useEffect(() => {
		if (!ready) {
			setTime(0);
		} else {
			const startTime = Date.now();
			const timer = setInterval(
				() => setTime((t) => ((Date.now() + 1 - startTime) / 1000).toFixed(0)),
				10
			);
			return () => {
				clearInterval(timer);
			};
		}
	}, [ready, setReady, setTime]);

	return <div className='text-9xl'>{ready ? time : 0}</div>;
};

export default ClockUp3;
