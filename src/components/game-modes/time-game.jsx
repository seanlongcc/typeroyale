import { useState, useEffect, useMemo } from 'react';
import Button from '../button/button';
import ClockDown from '../clock-down/clock-down';
import GameStats from '../game-stats/game-stats';
import TextBox from '../text-box/text-box';
import { generateRandomPassage } from './PassageGeneration';

const TimeGame = ({ typed, setTyped, ready, setReady, reset}) => {
	const [mode, setMode] = useState(60);
	const [customTime, setCustomTime] = useState('');
	const passage = useMemo(() => generateRandomPassage(mode === 'custom' ? 100 : mode*150, reset), [mode, restet]);

	const handleEnter = (e, type) => {
		if (type === 'enter' && e.key !== 'Enter') return;

		if (parseInt(customTime) <= 604800 && parseInt(customTime) > 0)
			setMode(parseInt(customTime));
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
					<ClockDown
						typed={typed}
						setTyped={setTyped}
						gameTime={mode === 'custom' ? customTime : mode}
						ready={ready}
						setReady={setReady}
					/>
				) : (
					<GameStats typed={typed} gameTime={mode} passage={passage.raw} />
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
			<span className='grid grid-cols-5 h-7 w-72 absolute-center text-lg'>
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
						className='outline-none'
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
