import { useState, useEffect } from 'react';
import { waitFor } from '@testing-library/react';
import { RiRefreshLine, RiShareForwardFill, RiLock2Line } from 'react-icons/ri';
import { useLocation } from "react-router-dom";
import AsyncGame from './async-game';
import { dummyData } from './dummydata';

const AsyncGameContainer = () => {
	const [mode, setMode] = useState('time');
	const [ready, setReady] = useState(false);
	const [reset, setReset] = useState(0);
	const [typed, setTyped] = useState({ val: '', keysPressed: [], done: false });
	const [caps, setCaps] = useState(false);
	const [progress, setProgress] = useState(0); // stores user word count
	const [game, setGame] = useState(false);

	useEffect(() => {
		setTyped({ val: '', keysPressed: [], done: false });
		setReady(false);
	}, [mode]);

	useEffect(()=>{
		// check if user logged in,
		// check if game exists
			// check if max players reached
			// setGame -> loading while game not set
		//console.log("URL PARAMS: ", useLocation()?.search);
	},[]);
	
	onkeydown = (e) => {
		if (e.getModifierState('CapsLock')) {
			setCaps(true);
		} else {
			setCaps(false);
		}
	};

	const resetGame = async () => {
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
				{
					!game
					?
						<div className="loading">loading</div>
					:
						<AsyncGame
						game={game}
						reset={reset}
						ready={ready}
						setReady={setReady}
						typed={typed}
						setTyped={setTyped}
						progress={progress}
						setProgress={setProgress}
				/>}
			</span>

			<div className='flex flex-col items-center'>
				<button
					className='text-xl hover:animate-pulse mt-2 btn btn-ghost'
					onClick={resetGame}
				>
					{typed.done ? <RiShareForwardFill /> : <RiRefreshLine />}
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

export default AsyncGameContainer;