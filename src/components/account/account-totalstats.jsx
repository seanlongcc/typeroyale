const AccountTotalStats = ({
	mode,
	complete,
	started,
	totChar,
	corChar,
	totTime,
	avgWPM,
	avgCPS,
	avgACC,
	bestWPM,
	bestCPS,
	bestACC,
}) => {
	return (
		<div className='flex flex-col items-center justify-center'>
			{/* general stats */}
			<span className='text-4xl m-4'>Totals</span>
			<div className='stats'>
				<div className='stat'>
					<div className='stat-figure text-secondary'></div>
					<div className='stat-title'>completed games</div>
					<div className='stat-value'>{complete}</div>
				</div>

				<div className='stat'>
					<div className='stat-figure text-secondary'></div>
					<div className='stat-title'>started games</div>
					<div className='stat-value'>{started}</div>
				</div>

				<div className='stat'>
					<div className='stat-figure text-secondary'></div>
					<div className='stat-title'>total characters typed</div>
					<div className='stat-value'>{totChar}</div>
				</div>
				<div className='stat'>
					<div className='stat-figure text-secondary'></div>
					<div className='stat-title'>total correct characters typed</div>
					<div className='stat-value'>{corChar}</div>
				</div>
				<div className='stat'>
					<div className='stat-figure text-secondary'></div>
					<div className='stat-title'>total time</div>
					<div className='stat-value'>{totTime}</div>
				</div>
			</div>
			<div className='divider'></div>
			{/* averages */}
			<span className='text-4xl mb-4'>Overall Averages</span>
			<div className='stats'>
				<div className='stat'>
					<div className='stat-figure text-secondary'></div>
					<div className='stat-title'>average words per minute</div>
					<div className='stat-value'>{avgWPM}</div>
				</div>

				<div className='stat'>
					<div className='stat-figure text-secondary'></div>
					<div className='stat-title'>average characters per second</div>
					<div className='stat-value'>{avgCPS}</div>
				</div>

				<div className='stat'>
					<div className='stat-figure text-secondary'></div>
					<div className='stat-title'>average accuracy</div>
					<div className='stat-value'>{avgACC}</div>
				</div>
			</div>
			<div className='divider'></div>
			{/* last 10 games */}
			<span className='text-4xl mb-4'>Personal Bests</span>
			<div className='stats'>
				<div className='stat'>
					<div className='stat-figure text-secondary'></div>
					<div className='stat-title'>highest words per minute</div>
					<div className='stat-value'>{bestWPM}</div>
					<div class='stat-desc'>mode it happened in</div>
				</div>

				<div className='stat'>
					<div className='stat-figure text-secondary'></div>
					<div className='stat-title'>highest characters per second</div>
					<div className='stat-value'>{bestCPS}</div>
					<div class='stat-desc'>mode it happened in</div>
				</div>

				<div className='stat'>
					<div className='stat-figure text-secondary'></div>
					<div className='stat-title'>highest average accuracy</div>
					<div className='stat-value'>{bestACC}</div>
					<div class='stat-desc'>mode it happened in</div>
				</div>
			</div>
		</div>
	);
};

export default AccountTotalStats;
