import { useState, useEffect, useMemo } from 'react';
import Button from '../button/button';
import ClockUp from '../clock-up/clock-up';
import GameStats from '../game-stats/game-stats';
import TextBox from '../text-box/text-box';
import { generateRandomPassage } from '../passage/passage-generation';
import { RiToolsFill } from 'react-icons/ri';

const custom = <RiToolsFill className='inline w-4 h-4' />;

const WordsGame = ({
	typed,
	setTyped,
	ready,
	setReady,
	reset,
	progress,
	setProgress,
}) => {
	const [mode, setMode] = useState(60);
	const [time, setTime] = useState(0);
	const [customLimit, setCustomLimit] = useState('');

	var passage = useMemo(() => {
		return generateRandomPassage(mode === custom ? 100 : mode, reset);
	}, [mode, reset]);

	const handleEnter = (e, type) => {
		if (type === 'enter' && e.key !== 'Enter') return;

		if (parseInt(customLimit) <= 100000 && parseInt(customLimit) > 0)
			setMode(parseInt(customLimit));
		else setMode(60);
	};

	useEffect(() => {
		setReady(false);
		setProgress(0);
		setTyped({ val: '', keysPressed: [], done: false });
		if (document.getElementById('text-box') && mode !== custom)
			document.getElementById('text-box').focus();
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
						mode='words'
					/>
				)}
			</span>
			<span className={typed.done && 'hidden'}>
				{progress} / {mode}
			</span>
			<span>
				{!typed.done ? (
					<TextBox
						passage={passage}
						typed={typed}
						setTyped={setTyped}
						setReady={setReady}
						ready={ready}
						mode='words'
						progress={progress}
						setProgress={setProgress}
					/>
				) : (
					<span />
				)}
			</span>
			<span className='btn-group absolute-center'>
				{[15, 30, 60, 120].map((time, i) => (
					<Button
						className='max-width-14'
						key={i}
						label={time}
						mode={mode}
						setMode={setMode}
					/>
				))}
				{mode !== custom ? (
					<Button label={custom} mode={mode} setMode={setMode} />
				) : (
					<input
						className='btn btn-sm'
						type='text'
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
