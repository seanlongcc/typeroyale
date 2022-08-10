const LastTenChart = ({ mode, stats }) => {
	const [avg_ten] = [stats.avg_ten];
	return (
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
								(stats.totals.all_games[stats.totals.all_games.length - 1]
									.correct_chars /
									stats.totals.all_games[stats.totals.all_games.length - 1]
										.time /
									5) *
								60
							).toFixed(2)}
						</td>
						<td>
							{(
								stats.totals.all_games[stats.totals.all_games.length - 1]
									.correct_chars /
								stats.totals.all_games[stats.totals.all_games.length - 1].time
							).toFixed(2)}
						</td>
						<td>
							{(
								(stats.totals.all_games[stats.totals.all_games.length - 1]
									.correct_chars /
									stats.totals.all_games[stats.totals.all_games.length - 1]
										.total_chars) *
								100
							).toFixed(2)}
							%
						</td>
					</tr>
					<tr>
						<td>2</td>
						<td>
							{(
								(stats.totals.all_games[stats.totals.all_games.length - 2]
									.correct_chars /
									stats.totals.all_games[stats.totals.all_games.length - 2]
										.time /
									5) *
								60
							).toFixed(2)}
						</td>
						<td>
							{(
								stats.totals.all_games[stats.totals.all_games.length - 2]
									.correct_chars /
								stats.totals.all_games[stats.totals.all_games.length - 2].time
							).toFixed(2)}
						</td>
						<td>
							{(
								(stats.totals.all_games[stats.totals.all_games.length - 2]
									.correct_chars /
									stats.totals.all_games[stats.totals.all_games.length - 2]
										.total_chars) *
								100
							).toFixed(2)}
							%
						</td>
					</tr>
					<tr>
						<td>3</td>
						<td>
							{(
								(stats.totals.all_games[stats.totals.all_games.length - 3]
									.correct_chars /
									stats.totals.all_games[stats.totals.all_games.length - 3]
										.time /
									5) *
								60
							).toFixed(2)}
						</td>
						<td>
							{(
								stats.totals.all_games[stats.totals.all_games.length - 3]
									.correct_chars /
								stats.totals.all_games[stats.totals.all_games.length - 3].time
							).toFixed(2)}
						</td>
						<td>
							{(
								(stats.totals.all_games[stats.totals.all_games.length - 3]
									.correct_chars /
									stats.totals.all_games[stats.totals.all_games.length - 3]
										.total_chars) *
								100
							).toFixed(2)}
							%
						</td>
					</tr>
					<tr>
						<td>4</td>
						<td>
							{(
								(stats.totals.all_games[stats.totals.all_games.length - 4]
									.correct_chars /
									stats.totals.all_games[stats.totals.all_games.length - 4]
										.time /
									5) *
								60
							).toFixed(2)}
						</td>
						<td>
							{(
								stats.totals.all_games[stats.totals.all_games.length - 4]
									.correct_chars /
								stats.totals.all_games[stats.totals.all_games.length - 4].time
							).toFixed(2)}
						</td>
						<td>
							{(
								(stats.totals.all_games[stats.totals.all_games.length - 4]
									.correct_chars /
									stats.totals.all_games[stats.totals.all_games.length - 4]
										.total_chars) *
								100
							).toFixed(2)}
							%
						</td>
					</tr>
					<tr>
						<td>5</td>
						<td>
							{(
								(stats.totals.all_games[stats.totals.all_games.length - 5]
									.correct_chars /
									stats.totals.all_games[stats.totals.all_games.length - 5]
										.time /
									5) *
								60
							).toFixed(2)}
						</td>
						<td>
							{(
								stats.totals.all_games[stats.totals.all_games.length - 5]
									.correct_chars /
								stats.totals.all_games[stats.totals.all_games.length - 5].time
							).toFixed(2)}
						</td>
						<td>
							{(
								(stats.totals.all_games[stats.totals.all_games.length - 5]
									.correct_chars /
									stats.totals.all_games[stats.totals.all_games.length - 5]
										.total_chars) *
								100
							).toFixed(2)}
							%
						</td>
					</tr>
					<tr>
						<td>6</td>
						<td>
							{(
								(stats.totals.all_games[stats.totals.all_games.length - 6]
									.correct_chars /
									stats.totals.all_games[stats.totals.all_games.length - 6]
										.time /
									5) *
								60
							).toFixed(2)}
						</td>
						<td>
							{(
								stats.totals.all_games[stats.totals.all_games.length - 6]
									.correct_chars /
								stats.totals.all_games[stats.totals.all_games.length - 6].time
							).toFixed(2)}
						</td>
						<td>
							{(
								(stats.totals.all_games[stats.totals.all_games.length - 6]
									.correct_chars /
									stats.totals.all_games[stats.totals.all_games.length - 6]
										.total_chars) *
								100
							).toFixed(2)}
							%
						</td>
					</tr>
					<tr>
						<td>7</td>
						<td>
							{(
								(stats.totals.all_games[stats.totals.all_games.length - 7]
									.correct_chars /
									stats.totals.all_games[stats.totals.all_games.length - 7]
										.time /
									5) *
								60
							).toFixed(2)}
						</td>
						<td>
							{(
								stats.totals.all_games[stats.totals.all_games.length - 7]
									.correct_chars /
								stats.totals.all_games[stats.totals.all_games.length - 7].time
							).toFixed(2)}
						</td>
						<td>
							{(
								(stats.totals.all_games[stats.totals.all_games.length - 7]
									.correct_chars /
									stats.totals.all_games[stats.totals.all_games.length - 7]
										.total_chars) *
								100
							).toFixed(2)}
							%
						</td>
					</tr>
					<tr>
						<td>8</td>
						<td>
							{(
								(stats.totals.all_games[stats.totals.all_games.length - 8]
									.correct_chars /
									stats.totals.all_games[stats.totals.all_games.length - 8]
										.time /
									5) *
								60
							).toFixed(2)}
						</td>
						<td>
							{(
								stats.totals.all_games[stats.totals.all_games.length - 8]
									.correct_chars /
								stats.totals.all_games[stats.totals.all_games.length - 8].time
							).toFixed(2)}
						</td>
						<td>
							{(
								(stats.totals.all_games[stats.totals.all_games.length - 8]
									.correct_chars /
									stats.totals.all_games[stats.totals.all_games.length - 8]
										.total_chars) *
								100
							).toFixed(2)}
							%
						</td>
					</tr>
					<tr>
						<td>9</td>
						<td>
							{(
								(stats.totals.all_games[stats.totals.all_games.length - 9]
									.correct_chars /
									stats.totals.all_games[stats.totals.all_games.length - 9]
										.time /
									5) *
								60
							).toFixed(2)}
						</td>
						<td>
							{(
								stats.totals.all_games[stats.totals.all_games.length - 9]
									.correct_chars /
								stats.totals.all_games[stats.totals.all_games.length - 9].time
							).toFixed(2)}
						</td>
						<td>
							{(
								(stats.totals.all_games[stats.totals.all_games.length - 9]
									.correct_chars /
									stats.totals.all_games[stats.totals.all_games.length - 9]
										.total_chars) *
								100
							).toFixed(2)}
							%
						</td>
					</tr>
					<tr>
						<td>10</td>
						<td>
							{(
								(stats.totals.all_games[stats.totals.all_games.length - 10]
									.correct_chars /
									stats.totals.all_games[stats.totals.all_games.length - 10]
										.time /
									5) *
								60
							).toFixed(2)}
						</td>
						<td>
							{(
								stats.totals.all_games[stats.totals.all_games.length - 10]
									.correct_chars /
								stats.totals.all_games[stats.totals.all_games.length - 10].time
							).toFixed(2)}
						</td>
						<td>
							{(
								(stats.totals.all_games[stats.totals.all_games.length - 10]
									.correct_chars /
									stats.totals.all_games[stats.totals.all_games.length - 10]
										.total_chars) *
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
	);
};
export default LastTenChart;
