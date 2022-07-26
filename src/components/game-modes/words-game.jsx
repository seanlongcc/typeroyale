import { useState, useEffect } from 'react';
import Button from '../button/button';
import ClockUp from '../clock-up/clock-up';
import GameStats from '../game-stats/game-stats';
import TextBox from '../text-box/text-box';

// temporary
//let passage = `tell century got pick bed definition hello room color enemy`;
//  amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
// commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
// Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const WordsGame = ({ typed, setTyped, ready, setReady, passage }) => {
	const [mode, setMode] = useState(60);
	const [time, setTime] = useState(0);
	const [customLimit, setCustomLimit] = useState('');

	const handleEnter = (e, type) => {
		if (type === 'enter' && e.key !== 'Enter') return;

		if (parseInt(customLimit) <= 604800 && parseInt(customLimit) > 0)
			setMode(customLimit);
		else setMode(60);
	};

	// ensures text box is focused after mode change
	useEffect(() => {
		if (document.getElementById('text-box') && mode !== 'custom') {
			document.getElementById('text-box').focus();
		}
	}, [mode]);

	return (
		<div className='flex flex-col items-center'>
			<span className='flex flex-col items-center'>
				{!typed.done ? (
					<ClockUp
						typed={typed}
						setTyped={setTyped}
						passage={passage}
						ready={ready}
						setReady={setReady}
						time={time}
						setTime={setTime}
					/>
				) : (
					<GameStats typed={typed} gameTime={time} passage={passage} />
				)}
			</span>
			<span>
				{!typed.done ? (
					<TextBox
						passage={passage}
						typed={typed}
						setTyped={setTyped}
						setReady={setReady}
						ready={ready}
						mode={mode}
					/>
				) : (
					<span />
				)}
			</span>
			<span className='grid grid-cols-6 absolute-center text-lg'>
				{[15, 30, 60, 120].map((time, i) => (
					<Button
						key={i}
						label={time}
						mode={mode}
						setMode={setMode}
						setReady={setReady}
						setTyped={setTyped}
					/>
				))}
				{mode !== 'custom' ? (
					<Button
						label={'custom'}
						mode={mode}
						setMode={setMode}
						setReady={setReady}
						setTyped={setTyped}
					/>
				) : (
					<input
						className='width w-14 outline-none'
						type='number'
						value={customLimit}
						onChange={(e) => setCustomLimit(e.target.value)}
						onKeyDown={(e) => handleEnter(e, 'enter')}
						onBlur={(e) => handleEnter(e, 'blur')}
						autoFocus
					/>
				)}
			</span>
		</div>
	);
};

export default WordsGame;
