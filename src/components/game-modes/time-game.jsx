import { useState, useEffect } from 'react';
import Button from '../button/button';
import ClockDown from '../clock-down/clock-down';
import TextBox from '../text-box/text-box';

// temporary
let passage = 'the quick brown fox jumps';

const TimeGame = () => {
	const [mode, setMode] = useState(60);
	const [ready, setReady] = useState(false);
	const [typed, setTyped] = useState({ val: '', attempted: 0 });
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
			// TODO: test robustness of code
			document.getElementById('text-box').addEventListener('focusout', () => {
				document.getElementById('text-box').focus();
			});
		}
	}, [mode]);

	return (
		<div>
			<span
				className={ready ? 'hidden' : 'flex flex-col items-center text-5xl'}
			>
				{mode}
			</span>
			<span className='flex flex-col items-center text-5xl'>
				{mode !== 'custom' && ready && (
					<ClockDown typed={typed} gameTime={mode} passage={passage} />
				)}
			</span>

			<span className='text-3xl'>
				{mode !== 'custom' ? (
					<TextBox
						passage={passage}
						typed={typed}
						setTyped={setTyped}
						setReady={setReady}
						mode={mode}
					/>
				) : (
					passage
				)}
			</span>

			<span className='grid grid-cols-6'>
				{[15, 30, 60, 120].map((time, i) => (
					<Button key={i} label={time} mode={mode} setMode={setMode} />
				))}
				{mode !== 'custom' ? (
					<Button label={'custom'} mode={mode} setMode={setMode} />
				) : (
					<input
						className='width w-14 outline-none'
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
