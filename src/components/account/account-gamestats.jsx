import { useState } from 'react';
import Button from '../button/button';
import { mode_map } from './statsHelpers';
import LastTenChart from './last-ten-chart';
import AllLastTenChart from './all-last-ten-chart';

const AccountGameStats = ({ mode, stats }) => {
	const { completed, started, total_chars, total_correct_chars, total_time } =
		stats.totals;
	const [avg_all] = [stats.avg_all];
	const [avgMode, setAvgMode] = useState('overall');

	return (
		<div className='flex flex-col items-center justify-center'>
			<div className='m-2'></div>
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
			</div>
			<div className='divider'></div>
			<div className=''></div>
			<div className='stats'>
				<div className='stat'>
					<div className='stat-figure text-secondary'></div>
					<div className='stat-title'>characters typed</div>
					<div className='stat-value'>{total_chars}</div>
				</div>
				<div className='stat'>
					<div className='stat-figure text-secondary'></div>
					<div className='stat-title'>correct characters typed</div>
					<div className='stat-value'>{total_correct_chars}</div>
				</div>
				<div className='stat'>
					<div className='stat-figure text-secondary'></div>
					<div className='stat-title'>time typing</div>
					<div className='stat-value'>{total_time.toFixed(2)}s</div>
				</div>
			</div>
			<div className='divider'></div>
			{/* bests */}
			{mode === 'all' && (
				<>
					<div className='stats'>
						<div className='stat'>
							<div className='stat-figure text-secondary'></div>
							<div className='stat-title'>highest words per minute</div>
							<div className='stat-value'>{stats.bests.wpm.val}</div>
							<div className='stat-desc'>{mode_map[stats.bests.wpm.mode]}</div>
						</div>

						<div className='stat'>
							<div className='stat-figure text-secondary'></div>
							<div className='stat-title'>highest characters per second</div>
							<div className='stat-value'>{stats.bests.cps.val}</div>
							<div className='stat-desc'>{mode_map[stats.bests.cps.mode]}</div>
						</div>

						<div className='stat'>
							<div className='stat-figure text-secondary'></div>
							<div className='stat-title'>highest average accuracy</div>
							<div className='stat-value'>{stats.bests.acc.val}%</div>
							<div className='stat-desc'>{mode_map[stats.bests.acc.mode]}</div>
						</div>
					</div>
					<div className='flex flex-col items-center m-4'>
						<button className='btn btn-sm no-animation btn-outline btn-primary'>
							last 10
						</button>
						<AllLastTenChart stats={stats.last_ten} />
					</div>
				</>
			)}
			{/* general stats */}
			{mode !== 'all' && (
				<div className='flex flex-col items-center justify-center'>
					<span className='btn-group mb-2'>
						<Button
							key={'overall'}
							label={'overall'}
							mode={avgMode}
							setMode={setAvgMode}
						/>
						<Button
							key={'last 10'}
							label={'last 10'}
							mode={avgMode}
							setMode={setAvgMode}
						/>
					</span>
					{avgMode === 'overall' ? (
						<div className='stats'>
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
								<div className='stat-title'>accuracy</div>
								<div className='stat-value'>{avg_all.acc}%</div>
							</div>
						</div>
					) : (
						<LastTenChart mode={mode} stats={stats} />
					)}
				</div>
			)}
		</div>
	);
};

export default AccountGameStats;
