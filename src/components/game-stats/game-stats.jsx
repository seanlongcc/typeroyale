const GameStats = ({ gameTime, typed, passage }) => {
	//bro this is working very wrong but its a start
	let stats = `wpm: ${(typed.val.length / gameTime).toFixed(2)}\naccuracy:${
		1 - (typed.attempted - passage.length) / passage.length
	}`;

	return <div>{stats}</div>;
};

export default GameStats;
