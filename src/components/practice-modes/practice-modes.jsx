import { useState, useEffect } from 'react';
import { waitFor } from '@testing-library/react';

import Button from '../button/button';
import TimeGame from '../game-modes/time-game';
import WordsGame from '../game-modes/words-game';
import QuoteGame from '../game-modes/quote-game';
import GibberishGame from '../game-modes/gibberish-game.jsx';

import { RiRefreshLine, RiArrowRightSLine, RiLock2Line } from 'react-icons/ri';

const PracticeModes = () => {
	const [mode, setMode] = useState('time');
	const [ready, setReady] = useState(false);
	const [typed, setTyped] = useState({ val: '', keysPressed: [], done: false });
	const [caps, setCaps] = useState(false);
	const [reset, setReset] = useState(0);
	const [progress, setProgress] = useState(0); // stores user word count
	const [textFocused, setTextFocused] = useState(false);

	useEffect(() => {
		setTyped({ val: '', keysPressed: [], done: false });
		setReady(false);
	}, [mode]);

	// time is default since state starts as time
	const renderMode = () => {
		switch (mode) {
			case 'words':
				return (
					<WordsGame
						reset={reset}
						ready={ready}
						setReady={setReady}
						typed={typed}
						setTyped={setTyped}
						progress={progress}
						setProgress={setProgress}
						textFocused={textFocused}
						setTextFocused={setTextFocused}
					/>
				);
			case 'time':
				return (
					<TimeGame
						reset={reset}
						ready={ready}
						setReady={setReady}
						typed={typed}
						setTyped={setTyped}
						progress={progress}
						setProgress={setProgress}
						textFocused={textFocused}
						setTextFocused={setTextFocused}
					/>
				);
			case 'quote':
				return (
					<QuoteGame
						reset={reset}
						ready={ready}
						setReady={setReady}
						typed={typed}
						setTyped={setTyped}
						progress={progress}
						setProgress={setProgress}
						textFocused={textFocused}
						setTextFocused={setTextFocused}
					/>
				);
			case 'gibberish':
				return (
					<GibberishGame
						reset={reset}
						ready={ready}
						setReady={setReady}
						typed={typed}
						setTyped={setTyped}
						progress={progress}
						setProgress={setProgress}
						textFocused={textFocused}
						setTextFocused={setTextFocused}
					/>
				);
			default:
				return <div />;
		}
	};

	// checks if caps is on
	onkeydown = (e) => {
		if (e.getModifierState('CapsLock')) {
			setCaps(true);
		} else {
			setCaps(false);
		}
	};

	const nextGame = async () => {
		setReady(false);
		setProgress(0);

		setTyped({ val: '', keysPressed: [], done: false });
		await waitFor(() => document.querySelector('text-box'));
		setReset((r) => r + 1);
		document.getElementById('text-box').focus();
	};

	return (
		<div className='flex flex-col items-center scrollbar'>
			<span className='text-primary'>
				{caps && !typed.done ? (
					<div className='alert bg-primary text-base-content'>
						<div>
							<RiLock2Line className='w-5 h-5' />
							<span>Caps Lock</span>
						</div>
					</div>
				) : (
					<span className='alert text-primary bg-base-content invisible'>
						Caps Lock
					</span>
				)}
			</span>
			<span tabIndex={0} className='outline-none'>
				{renderMode()}
			</span>

			<div className='btn-group mt-2'>
				{['time', 'words', 'quote', 'gibberish'].map((label, i) => (
					<Button
						key={i}
						label={label}
						mode={mode}
						setMode={setMode}
						setReady={setReady}
						setTyped={setTyped}
					/>
				))}
			</div>
			<div className='flex flex-col items-center'>
				<button
					className='text-xl hover:animate-pulse mt-2 btn btn-ghost'
					onClick={nextGame}
				>
					{typed.done ? <RiArrowRightSLine /> : <RiRefreshLine />}
				</button>
			</div>
			<span className='items-center absolute bottom-11'>
				<button
					className='btn btn-xs no-animation btn-outline btn-primary'
					tabIndex={-1}
				>
					tab
				</button>{' '}
				+{' '}
				<button
					className='btn btn-xs no-animation btn-outline btn-primary'
					tabIndex={-1}
				>
					enter
				</button>{' '}
				- {typed.done ? 'next' : 'restart'}
			</span>
		</div>
	);
};

export default PracticeModes;
