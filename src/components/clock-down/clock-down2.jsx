import { useEffect, useState } from 'react';

const ClockDown2 = ({ gameTime, typed, setTyped, ready, setReady }) => {
	//game insta finishes after restarting
	const [time, setTime] = useState(gameTime);

	useEffect(() => {
		if (time <= 0 && ready) {
			setTyped((t) => ({ ...t, done: true }));
		}
	}, [time, ready, setTyped]);

	useEffect(() => {
		if (!ready) {
			setTime(0);
		} else {
			const startTime = Date.now();
			const timer = setInterval(
				() =>
					setTime((t) =>
						(gameTime - (Date.now() + 1 - startTime) / 1000).toFixed(2)
					),
				10
			);
			return () => {
				clearInterval(timer);
			};
		}
	}, [gameTime, ready, setReady, setTime]);

	useEffect(() => {
		setTime(gameTime);
	}, [gameTime]);

	return <div className='text-9xl'>{ready ? time : gameTime || 'custom'}</div>;
};

export default ClockDown2;
