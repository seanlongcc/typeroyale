import { RiPulseLine, RiFontSize, RiMedalLine } from 'react-icons/ri';

const GameStats = ({ gameTime, typed, passage }) => {
	const wpm = ((typed.val.length / gameTime / 5) * 60).toFixed(2);
	const cps = (typed.val.length / gameTime).toFixed(2);
	const acc = () => {
		let ptr = 0;
		let correct = 0;
		let total = 0;

		typed.keysPressed.forEach((elem) => {
			if (elem.key === 'Backspace') {
				ptr -= 1;
				return;
			}

			if (elem.key === passage[ptr]) correct += 1;

			ptr += 1;
			total += 1;
		});

		return [correct, total];
	};
	const accuracy = ((acc()[0] / acc()[1]) * 100).toFixed(2);
	const charsTyped = acc()[1];
	const wrongChars = acc()[1] - acc()[0];

	return (
		<div className='flex flex-row mb-16'>
			{/* left */}
			<div className='stats stats-vertical'>
				<div className='stat'>
					<div className='stat-figure text-secondary'>
						<RiPulseLine className='w-10 h-10' />
					</div>
				</div>

				<div className='stat'>
					<div className='stat-figure text-secondary'>
						<RiFontSize className='w-10 h-10' />
					</div>
				</div>

				<div className='stat'>
					<div className='stat-figure text-secondary'>
						<RiMedalLine className='w-10 h-10' />
					</div>
				</div>
			</div>
			{/* left */}
			<div className='stats stats-vertical'>
				<div className='stat'>
					<div className='stat-figure text-secondary'></div>
					<div className='stat-title'>words per minute</div>
					<div className='stat-value'>{wpm}</div>
					<div className='stat-desc'></div>
				</div>

				<div className='stat'>
					<div className='stat-figure text-secondary'></div>
					<div className='stat-title'>total characters</div>
					<div className='stat-value'>{charsTyped}</div>
					<div className='stat-desc'></div>
				</div>

				<div className='stat'>
					<div className='stat-figure text-secondary'></div>
					<div className='stat-title'>time</div>
					<div className='stat-value'>{gameTime}s</div>
					<div className='stat-desc'></div>
				</div>
			</div>
			{/* right */}
			<div className='stats stats-vertical'>
				<div className='stat'>
					<div className='stat-figure text-secondary'></div>
					<div className='stat-title'>characters per second</div>
					<div className='stat-value'>{cps}</div>
					<div className='stat-desc'></div>
				</div>

				<div className='stat'>
					<div className='stat-figure text-secondary'></div>
					<div className='stat-title'>incorrect characters</div>
					<div className='stat-value'>{wrongChars}</div>
					<div className='stat-desc'></div>
				</div>
				<div className='stat'>
					<div className='stat-figure text-secondary'></div>
					<div className='stat-title'>accuracy</div>
					<div className='stat-value'>{accuracy}%</div>
					<div className='stat-desc'></div>
				</div>
			</div>
		</div>
	);
};

export default GameStats;
