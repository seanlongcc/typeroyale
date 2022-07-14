import { useEffect, useState } from 'react';
import GameStats from '../game-stats/game-stats.component';

const ClockDown = ({ gameTime }) => {
	const [time, setTime] = useState(gameTime);

	useEffect(() => {
		setTimeout(() => {
			if (time > 0) {
				setTime(time - 1);
			}
		}, 1000);
	});

	return <div>{time === 0 ? <GameStats /> : time}</div>;
};

export default ClockDown;
