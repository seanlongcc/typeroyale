import { useEffect, useState } from 'react';
import GameStats from '../game-stats/game-stats';

const ClockDown = ({ gameTime, typed, passage, setReady }) => {
	const [time, setTime] = useState(gameTime);

	useEffect(() => {
		setTimeout(() => {
			if (time > 0) {
				setTime(time - 1);
			} else {
				setReady(false);
			}
		}, 1000);
	});

	return (
		<div className='text-9xl'>
			{time === 0 ? (
				<GameStats typed={typed} gameTime={gameTime} passage={passage} />
			) : (
				time
			)}
		</div>
	);
};

export default ClockDown;
