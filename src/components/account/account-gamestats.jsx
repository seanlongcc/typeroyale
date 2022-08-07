const AccountGameStats = ({mode, stats}) => {
	const {completed, started, total_chars, correct_chars, time} = stats.totals;
	const [avg_all, avg_ten, bests] = [stats.avg_all, stats.avg_ten, stats.bests];

	return (
		<div className='flex flex-col items-center justify-center'>
			{/* general stats */}
			{/* <span className='text-4xl m-4'>Totals</span> */}
			<div className='divider'></div>

			<div className='stats'>
				<div className='stat'>
					<div className='stat-figure text-secondary'></div>
					<div className='stat-title'>completed games</div>
					<div className='stat-value'>{completed}</div>
				</div>

				<div className='stat'>
					<div className='stat-figure text-secondary'></div>
					<div className='stat-title'>started games</div>
					<div className='stat-value'>{started}</div>
				</div>

				<div className='stat'>
					<div className='stat-figure text-secondary'></div>
					<div className='stat-title'>characters typed</div>
					<div className='stat-value'>{total_chars}</div>
				</div>
				<div className='stat'>
					<div className='stat-figure text-secondary'></div>
					<div className='stat-title'>correct characters typed</div>
					<div className='stat-value'>{correct_chars}</div>
				</div>
				<div className='stat'>
					<div className='stat-figure text-secondary'></div>
					<div className='stat-title'>time typing</div>
					<div className='stat-value'>{time}s</div>
				</div>
			</div>
			{/* <div className='divider'></div> */}
			{/* averages */}
			{/* <span className='text-4xl mb-4'>Averages (Overall | Last 10)</span> */}
			<div className='stats mt-10'>
				<div className='stat'>
					<div className='stat-figure text-secondary'></div>
					<div className='stat-title'>words per minute</div>
					<div className='stat-value'>{avg_all.wpm}</div>
				</div>

				<div className='stat'>
					<div className='stat-figure text-secondary'></div>
					<div className='stat-title'>characters per second</div>
					<div className='stat-value'>{avg_all.cps}</div>
				</div>

				<div className='stat'>
					<div className='stat-figure text-secondary'></div>
					<div className='stat-title'> accuracy</div>
					<div className='stat-value'>{avg_all.acc}%</div>
				</div>
			</div>
			{/* <div className='divider'></div> */}
			{/* bests */}
			{/* <span className='text-4xl mb-4'>Personal Bests</span>
			<div className='stats'>
				<div className='stat'>
					<div className='stat-figure text-secondary'></div>
					<div className='stat-title'>highest words per minute</div>
					<div className='stat-value'>{bests.wpm}</div>
				</div>

				<div className='stat'>
					<div className='stat-figure text-secondary'></div>
					<div className='stat-title'>highest characters per second</div>
					<div className='stat-value'>{bests.cps}</div>
				</div>

				<div className='stat'>
					<div className='stat-figure text-secondary'></div>
					<div className='stat-title'>highest average accuracy</div>
					<div className='stat-value'>{bests.acc}</div>
				</div>
			</div> */}
		</div>
	);
};

export default AccountGameStats;
