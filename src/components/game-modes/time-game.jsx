import { useState, useEffect } from 'react';
import Button from '../button/button';
import ClockDown from '../clock-down/clock-down';
import GameStats from '../game-stats/game-stats';
import TextBox from '../text-box/text-box';

// temporary
let passage = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const TimeGame = ({ typed, setTyped, ready, setReady }) => {
	const [mode, setMode] = useState(60);
	const [customTime, setCustomTime] = useState('');

	const handleEnter = (e, type) => {
		if (type === 'enter' && e.key !== 'Enter') return;

		if (parseInt(customTime) <= 604800 && parseInt(customTime) > 0)
			setMode(customTime);
		else setMode('60');
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
					<ClockDown
						typed={typed}
						setTyped={setTyped}
						gameTime={mode === 'custom' ? customTime : mode}
						passage={passage}
						ready={ready}
						setReady={setReady}
					/>
				) : (
					<GameStats typed={typed} gameTime={mode} passage={passage} />
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
					<span></span>
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
						value={customTime}
						onChange={(e) => setCustomTime(e.target.value)}
						onKeyDown={(e) => handleEnter(e, 'enter')}
						onBlur={(e) => handleEnter(e, 'blur')}
						autoFocus
					/>
				)}
			</span>
		</div>
	);
};

export default TimeGame;
