import { useEffect } from 'react';

const ClockUp = ({ ready, setReady, time, setTime }) => {
	useEffect(() => {
		if (!ready) setTime(0);
		else {
			const timer = setInterval(() => setTime((t) => t + 1), 1000);
			return () => {
				clearInterval(timer);
			};
		}
	}, [ready, setReady, setTime]);

	return <div className='text-9xl'>{ready ? time : 0}</div>;
};

export default ClockUp;
