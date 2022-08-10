import { useState } from 'react';
import Button from '../button/button';
import { mode_map } from './statsHelpers';

const AccountGameStats = ({ mode, stats }) => {
	const { completed, started, total_chars, total_correct_chars, total_time } =
		stats.totals;
	const [avg_all, avg_ten] = [stats.avg_all, stats.avg_ten];

	const [avgMode, setAvgMode] = useState('overall');
	console.log('avg ten', avg_ten);
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
			<div class='divider'></div>
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
			<div class='divider'></div>
			{/* bests */}
			{mode === 'all' && (
				<>
					<div className=' '></div>
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
						<div className='overflow-x-auto '>
							<table className='table table-zebra table-compact w-full'>
								<thead>
									<tr>
										<th></th>
										<th>words per minute</th>
										<th>characters per second</th>
										<th>accuracy</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>1</td>
										<td>
											{(
												(stats.totals.all_games[
													stats.totals.all_games.length - 1
												].correct_chars /
													stats.totals.all_games[
														stats.totals.all_games.length - 1
													].time /
													5) *
												60
											).toFixed(2)}
										</td>
										<td>
											{(
												stats.totals.all_games[
													stats.totals.all_games.length - 1
												].correct_chars /
												stats.totals.all_games[
													stats.totals.all_games.length - 1
												].time
											).toFixed(2)}
										</td>
										<td>
											{(
												(stats.totals.all_games[
													stats.totals.all_games.length - 1
												].correct_chars /
													stats.totals.all_games[
														stats.totals.all_games.length - 1
													].total_chars) *
												100
											).toFixed(2)}
											%
										</td>
									</tr>
									<tr>
										<td>2</td>
										<td>
											{(
												(stats.totals.all_games[
													stats.totals.all_games.length - 2
												].correct_chars /
													stats.totals.all_games[
														stats.totals.all_games.length - 2
													].time /
													5) *
												60
											).toFixed(2)}
										</td>
										<td>
											{(
												stats.totals.all_games[
													stats.totals.all_games.length - 2
												].correct_chars /
												stats.totals.all_games[
													stats.totals.all_games.length - 2
												].time
											).toFixed(2)}
										</td>
										<td>
											{(
												(stats.totals.all_games[
													stats.totals.all_games.length - 2
												].correct_chars /
													stats.totals.all_games[
														stats.totals.all_games.length - 2
													].total_chars) *
												100
											).toFixed(2)}
											%
										</td>
									</tr>
									<tr>
										<td>3</td>
										<td>
											{(
												(stats.totals.all_games[
													stats.totals.all_games.length - 3
												].correct_chars /
													stats.totals.all_games[
														stats.totals.all_games.length - 3
													].time /
													5) *
												60
											).toFixed(2)}
										</td>
										<td>
											{(
												stats.totals.all_games[
													stats.totals.all_games.length - 3
												].correct_chars /
												stats.totals.all_games[
													stats.totals.all_games.length - 3
												].time
											).toFixed(2)}
										</td>
										<td>
											{(
												(stats.totals.all_games[
													stats.totals.all_games.length - 3
												].correct_chars /
													stats.totals.all_games[
														stats.totals.all_games.length - 3
													].total_chars) *
												100
											).toFixed(2)}
											%
										</td>
									</tr>
									<tr>
										<td>4</td>
										<td>
											{(
												(stats.totals.all_games[
													stats.totals.all_games.length - 4
												].correct_chars /
													stats.totals.all_games[
														stats.totals.all_games.length - 4
													].time /
													5) *
												60
											).toFixed(2)}
										</td>
										<td>
											{(
												stats.totals.all_games[
													stats.totals.all_games.length - 4
												].correct_chars /
												stats.totals.all_games[
													stats.totals.all_games.length - 4
												].time
											).toFixed(2)}
										</td>
										<td>
											{(
												(stats.totals.all_games[
													stats.totals.all_games.length - 4
												].correct_chars /
													stats.totals.all_games[
														stats.totals.all_games.length - 4
													].total_chars) *
												100
											).toFixed(2)}
											%
										</td>
									</tr>
									<tr>
										<td>5</td>
										<td>
											{(
												(stats.totals.all_games[
													stats.totals.all_games.length - 5
												].correct_chars /
													stats.totals.all_games[
														stats.totals.all_games.length - 5
													].time /
													5) *
												60
											).toFixed(2)}
										</td>
										<td>
											{(
												stats.totals.all_games[
													stats.totals.all_games.length - 5
												].correct_chars /
												stats.totals.all_games[
													stats.totals.all_games.length - 5
												].time
											).toFixed(2)}
										</td>
										<td>
											{(
												(stats.totals.all_games[
													stats.totals.all_games.length - 5
												].correct_chars /
													stats.totals.all_games[
														stats.totals.all_games.length - 5
													].total_chars) *
												100
											).toFixed(2)}
											%
										</td>
									</tr>
									<tr>
										<td>6</td>
										<td>
											{(
												(stats.totals.all_games[
													stats.totals.all_games.length - 6
												].correct_chars /
													stats.totals.all_games[
														stats.totals.all_games.length - 6
													].time /
													5) *
												60
											).toFixed(2)}
										</td>
										<td>
											{(
												stats.totals.all_games[
													stats.totals.all_games.length - 6
												].correct_chars /
												stats.totals.all_games[
													stats.totals.all_games.length - 6
												].time
											).toFixed(2)}
										</td>
										<td>
											{(
												(stats.totals.all_games[
													stats.totals.all_games.length - 6
												].correct_chars /
													stats.totals.all_games[
														stats.totals.all_games.length - 6
													].total_chars) *
												100
											).toFixed(2)}
											%
										</td>
									</tr>
									<tr>
										<td>7</td>
										<td>
											{(
												(stats.totals.all_games[
													stats.totals.all_games.length - 7
												].correct_chars /
													stats.totals.all_games[
														stats.totals.all_games.length - 7
													].time /
													5) *
												60
											).toFixed(2)}
										</td>
										<td>
											{(
												stats.totals.all_games[
													stats.totals.all_games.length - 7
												].correct_chars /
												stats.totals.all_games[
													stats.totals.all_games.length - 7
												].time
											).toFixed(2)}
										</td>
										<td>
											{(
												(stats.totals.all_games[
													stats.totals.all_games.length - 7
												].correct_chars /
													stats.totals.all_games[
														stats.totals.all_games.length - 7
													].total_chars) *
												100
											).toFixed(2)}
											%
										</td>
									</tr>
									<tr>
										<td>8</td>
										<td>
											{(
												(stats.totals.all_games[
													stats.totals.all_games.length - 8
												].correct_chars /
													stats.totals.all_games[
														stats.totals.all_games.length - 8
													].time /
													5) *
												60
											).toFixed(2)}
										</td>
										<td>
											{(
												stats.totals.all_games[
													stats.totals.all_games.length - 8
												].correct_chars /
												stats.totals.all_games[
													stats.totals.all_games.length - 8
												].time
											).toFixed(2)}
										</td>
										<td>
											{(
												(stats.totals.all_games[
													stats.totals.all_games.length - 8
												].correct_chars /
													stats.totals.all_games[
														stats.totals.all_games.length - 8
													].total_chars) *
												100
											).toFixed(2)}
											%
										</td>
									</tr>
									<tr>
										<td>9</td>
										<td>
											{(
												(stats.totals.all_games[
													stats.totals.all_games.length - 9
												].correct_chars /
													stats.totals.all_games[
														stats.totals.all_games.length - 9
													].time /
													5) *
												60
											).toFixed(2)}
										</td>
										<td>
											{(
												stats.totals.all_games[
													stats.totals.all_games.length - 9
												].correct_chars /
												stats.totals.all_games[
													stats.totals.all_games.length - 9
												].time
											).toFixed(2)}
										</td>
										<td>
											{(
												(stats.totals.all_games[
													stats.totals.all_games.length - 9
												].correct_chars /
													stats.totals.all_games[
														stats.totals.all_games.length - 9
													].total_chars) *
												100
											).toFixed(2)}
											%
										</td>
									</tr>
									<tr>
										<td>10</td>
										<td>
											{(
												(stats.totals.all_games[
													stats.totals.all_games.length - 10
												].correct_chars /
													stats.totals.all_games[
														stats.totals.all_games.length - 10
													].time /
													5) *
												60
											).toFixed(2)}
										</td>
										<td>
											{(
												stats.totals.all_games[
													stats.totals.all_games.length - 10
												].correct_chars /
												stats.totals.all_games[
													stats.totals.all_games.length - 10
												].time
											).toFixed(2)}
										</td>
										<td>
											{(
												(stats.totals.all_games[
													stats.totals.all_games.length - 10
												].correct_chars /
													stats.totals.all_games[
														stats.totals.all_games.length - 10
													].total_chars) *
												100
											).toFixed(2)}
											%
										</td>
									</tr>
								</tbody>
								<tfoot>
									<tr>
										<th>avg</th>
										<th>{avg_ten.wpm}</th>
										<th>{avg_ten.cps}</th>
										<th>{avg_ten.acc}%</th>
									</tr>
								</tfoot>
							</table>
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default AccountGameStats;
