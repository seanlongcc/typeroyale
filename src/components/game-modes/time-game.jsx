import { useState, useEffect, useMemo } from 'react';
import Button from '../button/button';
import ClockDown from '../clock-down/clock-down';
import GameStats from '../game-stats/game-stats';
import TextBox from '../text-box/text-box';
import { generateRandomPassage } from '../passage/passage-generation';
import { RiToolsFill } from 'react-icons/ri';

const custom = <RiToolsFill className='inline w-4 h-4' />;

const TimeGame = ({
	typed,
	setTyped,
	ready,
	setReady,
	reset,
	progress,
	setProgress,
	textFocused,
	setTextFocused,
}) => {
	const [mode, setMode] = useState(60);
	const [customTime, setCustomTime] = useState('');

	const passage = useMemo(
		() => generateRandomPassage(mode === custom ? 100 : mode * 300, reset),
		[mode, reset]
	);

	const handleEnter = (e, type) => {
		if (type === 'enter' && e.key !== 'Enter') return;

		if (parseInt(customTime) <= 1000 && parseInt(customTime) > 0)
			setMode(parseInt(customTime));
		else setMode(1000);
	};

	useEffect(() => {
		setReady(false);
		setProgress(0);
		setTyped({ val: '', keysPressed: [], done: false });
		if (document.getElementById('text-box') && mode !== custom)
			document.getElementById('text-box').focus();
	}, [mode, setReady, setTyped, setProgress]);

	return (
		<div className='flex flex-col items-center'>
			<span className='flex flex-col items-center'>
				{!typed.done ? (
					<ClockDown
						typed={typed}
						setTyped={setTyped}
						gameTime={mode === custom ? customTime : mode}
						ready={ready}
						setReady={setReady}
					/>
				) : (
					<GameStats
						duration={mode}
						typed={typed}
						gameTime={mode}
						passage={passage.raw}
						mode='time'
					/>
				)}
			</span>
			<span className={typed.done ? 'hidden' : ''}>{progress}</span>
			<span>
				{!typed.done ? (
					<TextBox
						duration={mode}
						passage={passage}
						typed={typed}
						setTyped={setTyped}
						setReady={setReady}
						ready={ready}
						mode='time'
						progress={progress}
						setProgress={setProgress}
						textFocused={textFocused}
						setTextFocused={setTextFocused}
					/>
				) : (
					<span />
				)}
			</span>
			<span className='btn-group absolute-center'>
				{[15, 30, 60, 120].map((time, i) => (
					<Button key={i} label={time} mode={mode} setMode={setMode} />
				))}
				{mode !== custom ? (
					<Button label={custom} mode={mode} setMode={setMode} />
				) : (
					<input
						className='btn btn-sm'
						type='text'
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
