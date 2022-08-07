import { Navigate } from 'react-router-dom';
import { getStats } from '../../firebase/firebase';
import { useState, useEffect, useMemo } from 'react';
import AccountGameStats from './account-gamestats';
import Button from '../button/button';

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

	const getTotals = (s, m) => {
		const modes = 
		m === "all"
		? ["time_game", "words_game", "quote_game", "gibberish_game"]
		: [`${m}_game`];

		const sum = (prev, curr) => (prev + curr);
		const wpm = (correct, time) => {
			const res = ((correct / time / 5) * 60).toFixed(2);
			return isNaN(res) ? 0 : res;
		}
		const cps = (correct, time) => {
			const res = (correct / time).toFixed(2);
			return isNaN(res) ? 0 : res;
		}
		const acc = (correct, total) => {
			const res = ((correct / total)*100).toFixed(2);
			return isNaN(res) ? 0 : res;
		}

		const agg = {
			started: modes.map(m => s[m].started).reduce(sum),
			completed: modes.map(m => s[m].completed).reduce(sum),
			time: modes.map(m => s[m].total_time).reduce(sum),
			total_chars: modes.map(m => s[m].total_chars).reduce(sum),
			correct_chars: modes.map(m => s[m].total_correct_chars).reduce(sum),
		};

		const last_ten = (() => {
			const games = m === 'all' ? s.last_ten : s[m].all_games.slice(-10)
			const total_chars = games.map(g => g.total_chars).reduce(sum);
			const correct_chars = games.map(g => g.correct_chars).reduce(sum);
			const time = games.map(g => g.time).reduce(sum);
			return {correct_chars, total_chars, time};
		});
		console.log("FML", agg.correct, agg.total_chars)
		return {
			totals: agg,
			avg_all: {
				wpm: wpm(agg.correct_chars, agg.time),
				cps: cps(agg.correct_chars, agg.time),
				acc: acc(agg.correct_chars, agg.total_chars)
			},
			avg_ten: {
				wpm: wpm(last_ten.correct_chars, last_ten.time),
				cps: cps(last_ten.correct_chars, last_ten.time),
				acc: acc(last_ten.correct_chars, last_ten.total_chars)
			},
			bests: {wpm: 0, cps: 0, acc: 0}
		};
	};

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
							stats={getTotals(stats, mode)} 
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
