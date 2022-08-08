import { Navigate } from 'react-router-dom';
import { getStats } from '../../firebase/firebase';
import { useState, useEffect, useMemo } from 'react';
import AccountGameStats from './account-gamestats';
import Button from '../button/button';
import { acc, sum, wpm, cps, getBests } from './statsHelpers';

const Account = ({ user }) => {
	const [mode, setMode] = useState('all');
	const [stats, setStats] = useState(false);
	
	useEffect(() => {
		async function fetchData() {
			const s = await getStats();
			setStats(s);
		}
		fetchData();
	}, [setStats]);

	const stats_by_mode = useMemo(() => {
		if(!stats) return {};

		return Object.assign({}, ...["time_game", "words_game", "quote_game", "gibberish_game"].map((m) => {
			const last_ten = () => {
				const games = stats[m].all_games.slice(-10);
				const total_chars = games[0] ? games.map(g => g.total_chars).reduce(sum): 0;
				const correct_chars = games[0] ? games.map(g => g.correct_chars).reduce(sum): 0;
				const time = games[0] ? games.map(g => parseInt(g.time)).reduce(sum): 0;
				return {correct_chars, total_chars, time};
			};
			const lt = last_ten();
			console.log(lt)	
			return {
				[m]: {
					totals: stats[m],
					avg_all: {
						wpm: wpm(stats[m].total_correct_chars, stats[m].total_time),
						cps: cps(stats[m].total_correct_chars, stats[m].total_time),
						acc: acc(stats[m].total_correct_chars, stats[m].total_chars)
					},
					avg_ten: {
						wpm: wpm(lt.correct_chars, lt.time),
						cps: cps(lt.correct_chars, lt.time),
						acc: acc(lt.correct_chars, lt.total_chars)
					}				
				}
			}
		}));
	},[stats]);

	const overall_stats = useMemo(() => {
		if(!stats) return {};

		const modes = ["time_game", "words_game", "quote_game", "gibberish_game"];
		const agg = {
			started: modes.map(m => stats[m].started).reduce(sum),
			completed: modes.map(m => stats[m].completed).reduce(sum),
			total_time: modes.map(m => stats[m].total_time).reduce(sum),
			total_chars: modes.map(m => stats[m].total_chars).reduce(sum),
			total_correct_chars: modes.map(m => stats[m].total_correct_chars).reduce(sum),
		};

		const last_ten = () => {
			const games = stats.last_ten
			const total_chars = games[0] ? games.map(g => g.total_chars).reduce(sum): 0;
			const correct_chars = games[0] ? games.map(g => g.correct_chars).reduce(sum): 0;
			const time = games[0] ? games.map(g => parseInt(g.time)).reduce(sum): 0;
			return {correct_chars, total_chars, time};
		};

		const lt = last_ten();

		return {
			totals: agg,
			avg_all: {
				wpm: wpm(agg.total_correct_chars, agg.total_time),
				cps: cps(agg.total_correct_chars, agg.total_time),
				acc: acc(agg.total_correct_chars, agg.total_chars)
			},
			avg_ten: {
				wpm: wpm(lt.correct_chars, lt.time),
				cps: cps(lt.correct_chars, lt.time),
				acc: acc(lt.correct_chars, lt.total_chars)
			},
			bests: getBests(stats_by_mode)
		};
	}, [stats]);

	return user ? (
		<div className='flex flex-col items-center h-screen justify-center'>
			<div className='avatar mb-4'>
				<div className='flex flex-col w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
					<img className='mask mask-circle ' src={user.photoURL} alt='' />
				</div>
			</div>
			<span className='flex justify-center text-4xl mb-4'>
				{user.displayName}
			</span>
			<div className='btn-group'>
				{['all', 'time', 'words', 'quote', 'gibberish'].map((label, i) => (
					<Button key={i} label={label} mode={mode} setMode={setMode} />
				))}
			</div>
			<span tabIndex={0} className='outline-none'>
				{
					stats 
					? <AccountGameStats 
							mode={mode}
							stats={
								mode === 'all'
								? overall_stats
								: stats_by_mode[`${mode}_game`]
							} 
						/>
					: <span>LOADING...</span>
				}
			</span>
		</div>
	) : (
		<Navigate to='/login' />
	);
};

export default Account;
