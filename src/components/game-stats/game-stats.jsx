const GameStats = ({ gameTime, typed, passage }) => {
	const wpm = ((typed.val.length / gameTime / 5) * 60).toFixed(2);
	const cps = (typed.val.length / gameTime).toFixed(2);
	const acc = () => {
		let ptr = 0;
		let correct = 0;
		let total = 0;

		typed.keysPressed.forEach((elem) => {
			if(elem.key === 'Backspace'){
				ptr -= 1;
				return;
			}

			if(elem.key === passage[ptr])
				correct += 1

			ptr += 1;
			total += 1;
		});

		return [correct, total];
	}


	//bro this is working very wrong but its a start
	//   const stats = `wpm: ${wpm}\n cpm: ${cps}\n accuracy:${
	//     1 - (typed.keysPressed - passage.length) / passage.length
	//   }`;

	return (
		<div className='text-6xl grid grid-rows-3 py-2'>
			<span>wpm: {wpm}</span>
			<span>cps: {cps}</span>
			<span>chars typed: {acc()[1]}</span>
			<span>incorrect chars: {acc()[1] - acc()[0]}</span>
			<span>acc: {(acc()[0] / acc()[1]).toFixed(2)}</span>
		</div>
	);
};

export default GameStats;
