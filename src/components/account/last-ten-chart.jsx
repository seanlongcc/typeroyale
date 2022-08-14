const LastTenChart = ({ mode, stats }) => {
	const [avg_ten] = [stats.avg_ten];
	const lastTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	return (
		<div>
			{stats.totals.all_games.length < 10 ? (
				<div className='text-2xl flex flex-col items-center justify-center'>
					<span>play at least 10 games to show your stats</span>
					<progress
						className='progress progress-primary w-56 mt-4 bg-secondary'
						value={stats.totals.all_games.length}
						max='10'
					></progress>
				</div>
			) : (
				<div className='overflow-x-auto'>
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
							{lastTen.map((m, i) => (
								<tr key={i}>
									<td>{[m]}</td>
									<td>
										{(
											(stats.totals.all_games[
												stats.totals.all_games.length - [m]
											].correct_chars /
												stats.totals.all_games[
													stats.totals.all_games.length - [m]
												].time /
												5) *
											60
										).toFixed(2)}
									</td>
									<td>
										{(
											stats.totals.all_games[
												stats.totals.all_games.length - [m]
											].correct_chars /
											stats.totals.all_games[
												stats.totals.all_games.length - [m]
											].time
										).toFixed(2)}
									</td>
									<td>
										{(
											(stats.totals.all_games[
												stats.totals.all_games.length - [m]
											].correct_chars /
												stats.totals.all_games[
													stats.totals.all_games.length - [m]
												].total_chars) *
											100
										).toFixed(2)}
										%
									</td>
								</tr>
							))}
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
	);
};
export default LastTenChart;
