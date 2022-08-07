import { useState, useEffect, useMemo } from 'react';
import Button from '../button/button';
import ClockUp from '../clock-up/clock-up';
import GameStats from '../game-stats/game-stats';
import TextBox from '../text-box/text-box';
import { generateQuote } from '../passage/quote-generation';

const QuoteGame = ({
	typed,
	setTyped,
	ready,
	setReady,
	reset,
	progress,
	setProgress,
}) => {
	const [mode, setMode] = useState('all');
	const [time, setTime] = useState(0);
	var passage = useMemo(() => {
		return generateQuote(mode, reset);
	}, [mode, reset]);

	// ensures text box is focused after mode change
	useEffect(() => {
		setReady(false);
		setProgress(0);
		setTyped({ val: '', keysPressed: [], done: false });
		if (document.getElementById('text-box')) {
			document.getElementById('text-box').focus();
		}
	}, [mode, setReady, setTyped, setProgress]);

	return (
		<div className='flex flex-col items-center w-screen'>
			<span className='flex flex-col items-center'>
				{!typed.done ? (
					<ClockUp
						typed={typed}
						setTyped={setTyped}
						ready={ready}
						time={time}
						setTime={setTime}
					/>
				) : (
					<GameStats
						typed={typed}
						gameTime={time}
						passage={passage.raw}
						mode='quote'
					/>
				)}
			</span>
			<span className={typed.done ? 'hidden' : ''}>
				{progress} / {passage.length}
			</span>
			<span>
				{!typed.done ? (
					<TextBox
						passage={passage}
						typed={typed}
						setTyped={setTyped}
						setReady={setReady}
						ready={ready}
						mode='quote'
						progress={progress}
						setProgress={setProgress}
					/>
				) : (
					<span />
				)}
			</span>
			<span className='btn-group absolute-center'>
				{['all', 'short', 'med', 'long', 'omega'].map((time, i) => (
					<Button
						className='max-width-14'
						key={i}
						label={time}
						mode={mode}
						setMode={setMode}
					/>
				))}
			</span>
		</div>
	);
};

export default QuoteGame;
