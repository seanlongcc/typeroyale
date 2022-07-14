import { useEffect, useState } from 'react';
import GameStats from '../game-stats/game-stats';

const ClockDown = ({ gameTime, typed, passage }) => {
	const [time, setTime] = useState(gameTime);

	useEffect(() => {
		setTimeout(() => {
			if (time > 0) {
				setTime(time - 1);
			}
		}, 1000);
	});

	return (
		<div>
			{time === 0 ? (
				<GameStats typed={typed} gameTime={gameTime} passage={passage} />
			) : (
				time
			)}
		</div>
	);
};

export default ClockDown;
