const GameStats = ({ gameTime, typed, passage }) => {
	const wpm = ((typed.val.length / gameTime / 5) * 60).toFixed(2);
	const cps = (typed.val.length / gameTime).toFixed(2);
	const acc = 97;

	//bro this is working very wrong but its a start
	//   const stats = `wpm: ${wpm}\n cpm: ${cps}\n accuracy:${
	//     1 - (typed.keysPressed - passage.length) / passage.length
	//   }`;

	return (
		<div className='grid grid-rows-3'>
			<span>wpm: {wpm}</span>
			<span>cps: {cps}</span>
			<span>acc: {acc}</span>
		</div>
	);
};

export default GameStats;
