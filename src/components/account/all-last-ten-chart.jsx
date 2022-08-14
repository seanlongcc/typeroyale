const AllLastTenChart = ({ stats }) => {
	const lastTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	const average = (array) => array.reduce((a, b) => a + b) / array.length;
	let avgWPM = 0,
		avgCPS = 0,
		avgACC = 0;

	if (stats.length >= 10) {
		avgWPM = average(
			lastTen.map(
				(m) =>
					(stats[stats.length - [m]].correct_chars /
						stats[stats.length - [m]].time /
						5) *
					60
			)
		);
		avgCPS = average(
			lastTen.map(
				(m) =>
					stats[stats.length - [m]].correct_chars /
					stats[stats.length - [m]].time
			)
		);
		avgACC = average(
			lastTen.map(
				(m) =>
					(stats[stats.length - [m]].correct_chars /
						stats[stats.length - [m]].total_chars) *
					100
			)
		);
	}

	return (
		<div className='mt-2'>
			{stats.length < 10 ? (
				<div className='text-2xl flex flex-col items-center justify-center'>
					<span>play at least 10 games to show your stats</span>
					<progress
						className='progress progress-primary w-56 mt-4 bg-secondary'
						value={stats.length}
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
											(stats[stats.length - [m]].correct_chars /
												stats[stats.length - [m]].time /
												5) *
											60
										).toFixed(2)}
									</td>
									<td>
										{(
											stats[stats.length - [m]].correct_chars /
											stats[stats.length - [m]].time
										).toFixed(2)}
									</td>
									<td>
										{(
											(stats[stats.length - [m]].correct_chars /
												stats[stats.length - [m]].total_chars) *
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
								<th>{avgWPM.toFixed(2)}</th>
								<th>{avgCPS.toFixed(2)}</th>
								<th>{avgACC.toFixed(2)}%</th>
							</tr>
						</tfoot>
					</table>
				</div>
			)}
		</div>
	);
};
export default AllLastTenChart;
