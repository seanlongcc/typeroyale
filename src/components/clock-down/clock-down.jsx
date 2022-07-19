import { useEffect, useState } from 'react';

const ClockDown = ({ gameTime, typed, setTyped, ready, setReady }) => {
	const [time, setTime] = useState(gameTime);

	useEffect(() => {
		if (ready) {
			setTimeout(() => {
				if (time > 0) {
					setTime(time - 1);
				} else {
					setTyped({ ...typed, done: true });
					setReady(false);
				}
			}, 1000);
		}
	}, [ready, setReady, setTyped, time, typed]);

	useEffect(() => {
		setTime(gameTime);
	}, [gameTime]);

	return <div className='text-9xl'>{ready ? time : gameTime || 'custom'}</div>;
};

export default ClockDown;
