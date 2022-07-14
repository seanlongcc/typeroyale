import { useEffect, useState } from 'react';
import GameStats from '../game-stats/game-stats.component';

const ClockDown = ({ gameTime, typed, passage }) => {
	const [time, setTime] = useState(gameTime);

	useEffect(() => {
		setTimeout(() => {
			if (time > 0) {
				setTime(time - 1);
			}
		}, 1000);
	});

	// temporary
	let stats = `wpm: ${(typed.val.length / gameTime).toFixed(2)}\naccuracy:${
		1 - (typed.attempted - passage.length) / passage.length
	}`;

	return <div>{time === 0 ? stats : time}</div>;
};

export default ClockDown;
