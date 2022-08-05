import { Navigate } from 'react-router-dom';
import { getStats, db } from '../../firebase/firebase';
import { doc, getDoc } from 'firebase/firestore';
import AccountGameStats from './account-gamestats';
import AccountTotalStats from './account-totalstats';
import { useState } from 'react';

const Account = ({ user }) => {
	const [mode, setMode] = useState('total');
	// getDoc(doc(db, 'users', user.uid)).then((docSnap) => {
	// 	if (docSnap.exists()) {
	// 		console.log('Document data:', docSnap.data().practice);
	// 	} else {
	// 		console.log('No such document!');
	// 	}
	// });
	const renderMode = () => {
		switch (mode) {
			case 'total':
				return (
					<AccountTotalStats
						mode='total'
						complete='0'
						avgWPM='0'
						tenWPM='0'
						bestWPM='0'
					/>
				);
			case 'words':
				return (
					<AccountGameStats
						mode='words'
						complete='1'
						avgWPM='1'
						tenWPM='1'
						bestWPM='1'
					/>
				);
			case 'time':
				return (
					<AccountGameStats
						mode='time'
						complete='2'
						avgWPM='2'
						tenWPM='2'
						bestWPM='2'
					/>
				);
			case 'quote':
				return (
					<AccountGameStats
						mode='quote'
						complete='3'
						avgWPM='3'
						tenWPM='3'
						bestWPM='3'
					/>
				);
			case 'gibberish':
				return (
					<AccountGameStats
						mode='gibberish'
						complete='4'
						avgWPM='4'
						tenWPM='4'
						bestWPM='4'
					/>
				);
			default:
				return <div />;
		}
	};

	const handleChange = (e) => {
		setMode(e.target.value);
	};

	return user ? (
		<div className='flex flex-col items-center h-screen justify-center'>
			<div className='avatar mb-4'>
				<div className='flex flex-col w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
					<img className='mask mask-circle' src={user.photoURL} alt='' />
				</div>
			</div>
			<span className='flex justify-center text-4xl mb-4'>
				{user.displayName}
			</span>

			<select
				class='select select-primary w-full max-w-xs'
				value={mode}
				onChange={handleChange}
			>
				<option value='total'>TOTAL</option>
				<option value='time'>TIME</option>
				<option value='words'>WORDS</option>
				<option value='quote'>QUOTE</option>
				<option value='gibberish'>GIBBERISH</option>
			</select>
			<span tabIndex={0} className='outline-none'>
				{renderMode()}
			</span>
		</div>
	) : (
		<Navigate to='/login' />
	);
};

export default Account;
