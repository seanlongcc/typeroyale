import { Navigate } from 'react-router-dom';
import { getStats } from '../../firebase/firebase';
import { useState, useEffect } from 'react';
import AccountGameStats from './account-gamestats';
import AccountTotalStats from './account-totalstats';
import Button from '../button/button';

const Account = ({ user }) => {
	const [mode, setMode] = useState('total');
	const [stats, setStats] = useState({});

	useEffect(() => {
		async function fetchData() {
			setStats(await getStats());
		}
		fetchData();
	}, [setStats]);
	const renderMode = () => {
		switch (mode) {
			case 'total':
				return (
					<AccountTotalStats
						// complete={
						// 	stats.time_game.completed +
						// 	stats.words_game.completed +
						// 	stats.quote_game.completed +
						// 	stats.time_game.completed
						// }
						// started={
						// 	stats.time_game.started +
						// 	stats.words_game.started +
						// 	stats.quote_game.started +
						// 	stats.time_game.started
						// }
						// totChar={
						// 	stats.time_game.total_chars +
						// 	stats.words_game.total_chars +
						// 	stats.quote_game.total_chars +
						// 	stats.time_game.total_chars
						// }
						// corChar={
						// 	stats.time_game.total_correct_chars +
						// 	stats.words_game.total_correct_chars +
						// 	stats.quote_game.total_correct_chars +
						// 	stats.time_game.total_correct_chars
						// }
						// totTime={
						// 	stats.time_game.total_time +
						// 	stats.words_game.total_time +
						// 	stats.quote_game.total_time +
						// 	stats.time_game.total_time
						// }
						avgWPM='0'
						avgCPS='0'
						avgACC='0'
						tenWPM='0'
						tenCPS='0'
						tenACC='0'
						bestWPM='0'
						bestCPS='0'
						bestACC='0'
					/>
				);

			case 'time':
				return (
					<AccountGameStats
						complete={stats.time_game.completed}
						started={stats.time_game.started}
						totChar={stats.time_game.total_chars}
						corChar={stats.time_game.total_correct_chars}
						totTime={stats.time_game.total_time}
						avgWPM='0'
						avgCPS='0'
						avgACC='0'
						tenWPM='0'
						tenCPS='0'
						tenACC='0'
						bestWPM='0'
						bestCPS='0'
						bestACC='0'
					/>
				);
			case 'words':
				return (
					<AccountGameStats
						complete={stats.words_game.completed}
						started={stats.words_game.started}
						totChar={stats.words_game.total_chars}
						corChar={stats.words_game.total_correct_chars}
						totTime={stats.words_game.total_time}
						avgWPM='0'
						avgCPS='0'
						avgACC='0'
						tenWPM='0'
						tenCPS='0'
						tenACC='0'
						bestWPM='0'
						bestCPS='0'
						bestACC='0'
					/>
				);
			case 'quote':
				return (
					<AccountGameStats
						complete={stats.quote_game.completed}
						started={stats.quote_game.started}
						totChar={stats.quote_game.total_chars}
						corChar={stats.quote_game.total_correct_chars}
						totTime={stats.quote_game.total_time}
						avgWPM='0'
						avgCPS='0'
						avgACC='0'
						tenWPM='0'
						tenCPS='0'
						tenACC='0'
						bestWPM='0'
						bestCPS='0'
						bestACC='0'
					/>
				);
			case 'gibberish':
				return (
					<AccountGameStats
						complete={stats.time_game.completed}
						started={stats.time_game.started}
						totChar={stats.time_game.total_chars}
						corChar={stats.time_game.total_correct_chars}
						totTime={stats.time_game.total_time}
						avgWPM='0'
						avgCPS='0'
						avgACC='0'
						tenWPM='0'
						tenCPS='0'
						tenACC='0'
						bestWPM='0'
						bestCPS='0'
						bestACC='0'
					/>
				);
			default:
				return <div />;
		}
	};

	// const handleChange = (e) => {
	// 	setMode(e.target.value);
	// };

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
				{['total', 'time', 'words', 'quote', 'gibberish'].map((label, i) => (
					<Button key={i} label={label} mode={mode} setMode={setMode} />
				))}
			</div>
			{/* <select
				className='select select-primary w-full max-w-xs'
				value={mode}
				onChange={handleChange}
			>
				<option value='total'>TOTAL</option>
				<option value='time_game'>TIME</option>
				<option value='words'>WORDS</option>
				<option value='quote'>QUOTE</option>
				<option value='gibberish'>GIBBERISH</option>
			</select> */}
			<span tabIndex={0} className='outline-none'>
				{renderMode()}
			</span>
		</div>
	) : (
		<Navigate to='/login' />
	);
};

export default Account;
