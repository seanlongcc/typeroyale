import { useState } from "react";
import Button from '../button/button';
import { mode_map } from "./statsHelpers";

const AccountGameStats = ({mode, stats}) => {
	const {completed, started, total_chars, total_correct_chars, total_time} = stats.totals;
	const [avg_all, avg_ten] = [stats.avg_all, stats.avg_ten];

	const [avgMode, setAvgMode] = useState("overall");
	console.log(avg_ten)
	return (
		<div className='flex flex-col items-center justify-center'>
			{/* general stats */}
			<span className='text-4xl m-4'>Totals</span>
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
					<div className='stat-value'>{total_correct_chars}</div>
				</div>
				<div className='stat'>
					<div className='stat-figure text-secondary'></div>
					<div className='stat-title'>time typing</div>
					<div className='stat-value'>{total_time}s</div>
				</div>
			</div>
			<div className='divider'></div>
			{/* averages */}
			<span className='text-4xl mb-4'>
				<span className="mr-4">Averages</span>
				<Button key={"overall"} label={"overall"} mode={avgMode} setMode={setAvgMode}/>
				<Button key={"last 10"} label={"last 10"} mode={avgMode} setMode={setAvgMode} />
			</span>
			<div className='stats'>
				<div className='stat'>
					<div className='stat-figure text-secondary'></div>
					<div className='stat-title'>words per minute</div>
					<div className='stat-value'>
						{	avgMode === "overall" ? avg_all.wpm : avg_ten.wpm}
					</div>
				</div>

				<div className='stat'>
					<div className='stat-figure text-secondary'></div>
					<div className='stat-title'>characters per second</div>
					<div className='stat-value'>
					{	avgMode === "overall" ? avg_all.cps : avg_ten.cps}
					</div>
				</div>

				<div className='stat'>
					<div className='stat-figure text-secondary'></div>
					<div className='stat-title'> accuracy</div>
					<div className='stat-value'>
					{	avgMode === "overall" ? avg_all.acc : avg_ten.acc}%
					</div>
				</div>
			</div>
			{/* bests */}
			{
				mode === "all" && 
				<>
				<div className='divider'></div>
				<span className='text-4xl mb-4'>Personal Bests</span>
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
						<div className='stat-value'>{stats.bests.acc.val}</div>
						<div className='stat-desc'>{mode_map[stats.bests.acc.mode]}</div>
					</div>
				</div>
				</>
			}
		</div>
	);
};

export default AccountGameStats;
