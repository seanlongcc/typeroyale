import { useEffect, useState } from 'react';
import {
	RiPulseLine,
	RiFontSize,
	RiMedalLine,
	RiInformationLine,
	RiShareForwardFill
} from 'react-icons/ri';
import { updateStats } from '../../firebase/firebase';

const GameStats = ({ gameTime, typed, passage, mode, source, duration }) => {
	const acc = () => {
		let ptr = 0;
		let correct = 0;
		let total = 0;

		typed.keysPressed.forEach((elem) => {
			if (elem.key === 'Backspace') {
				ptr -= 1;
				return;
			}

			if (elem.key === passage[ptr]) correct += 1;

			ptr += 1;
			total += 1;
		});

		return [correct, total];
	};

	const [correct, total] = acc();
	const wpm = ((correct / gameTime / 5) * 60).toFixed(2);
	const cps = (correct / gameTime).toFixed(2);
	const accuracy = ((correct / total) * 100).toFixed(2);
	const charsTyped = total;
	const wrongChars = total - correct;

	useEffect(() => {
		updateStats(mode, total, correct, gameTime, duration);
	}, [mode, total, correct, gameTime, duration]);

	///// SHARE GAME CODE /////
	// TODO: TIME GAME CANT BE SHARED
						// game can have max of 5 players

	const [shareStatus, setShareStatus] = useState("NOT_SHARED"); // NOT_SHARED, 1: fetching, 2:
	// TODO:
	const onShareGameClicked = (e) => {
		setShareStatus("FETCHING_LINK");

		/* if logged in 

		let cursorPos = typed.keysPressed.map((k, i) => ({
			change: k.key === 'Backspace' ? -1 : 1, 
			delay: i === 0 ? 0 : k.time - keysPressed[i-1] 
		}));

		// check if current game is shared game
			// if not, firebase creates a new entry
				with the user's name and game entry
		// if new shared game
		// schema: {id, asyncGameEntry[], }
		*/

		//let asyncGameEntry = {name: "name", gameType, mode, cursorPos};
		// copy game url to keyboard and give indicator to user
	};
	/////////////////////////////////////////////

	return (
		<div className='flex flex-col items-center'>
			{source !== undefined ? (
				<div className='flex flex-col items-center'>
					<div>
						<span>Quote from</span>
					</div>
					<span className='italic'>{source}</span>
				</div>
			) : (
				<div></div>
			)}

			{mode !== 'quote' && duration < 15 ? (
				<div className='alert bg-primary flex flex-col items-center w-80'>
					<span>
						<RiInformationLine className='w-5 h-5' />
						{mode === 'time'
							? "Tests under 15 seconds aren't saved"
							: "Tests under 15 words aren't saved"}
					</span>
				</div>
			) : (
				<div></div>
			)}

			<div className='flex flex-row mb-4'>
				{/* left */}
				<div className='stats stats-vertical'>
					<div className='stat'>
						<div className='stat-figure text-secondary'>
							<RiPulseLine className='w-10 h-10' />
						</div>
					</div>

					<div className='stat'>
						<div className='stat-figure text-secondary'>
							<RiFontSize className='w-10 h-10' />
						</div>
					</div>

					<div className='stat'>
						<div className='stat-figure text-secondary'>
							<RiMedalLine className='w-10 h-10' />
						</div>
					</div>
				</div>
				{/* left */}
				<div className='stats stats-vertical'>
					<div className='stat'>
						<div className='stat-figure text-secondary'></div>
						<div className='stat-title'>words per minute</div>
						<div className='stat-value'>{wpm}</div>
					</div>

					<div className='stat'>
						<div className='stat-figure text-secondary'></div>
						<div className='stat-title'>total characters</div>
						<div className='stat-value'>{charsTyped}</div>
					</div>

					<div className='stat'>
						<div className='stat-figure text-secondary'></div>
						<div className='stat-title'>time</div>
						<div className='stat-value'>{gameTime}s</div>
					</div>
				</div>
				{/* right */}
				<div className='stats stats-vertical'>
					<div className='stat'>
						<div className='stat-figure text-secondary'></div>
						<div className='stat-title'>characters per second</div>
						<div className='stat-value'>{cps}</div>
					</div>

					<div className='stat'>
						<div className='stat-figure text-secondary'></div>
						<div className='stat-title'>incorrect characters</div>
						<div className='stat-value'>{wrongChars}</div>
					</div>
					<div className='stat'>
						<div className='stat-figure text-secondary'></div>
						<div className='stat-title'>accuracy</div>
						<div className='stat-value'>{accuracy}%</div>
					</div>
				</div>
			</div>
			<div>
				{
					shareStatus === 'NOT_SHARED'
					? <button 
							className='btn btn-sm text-primary btn-outline btn-primary mb-4 gap-2'
							onClick={onShareGameClicked}
						>
							<RiShareForwardFill/>
							<span>race friends</span>
						</button>
					: <button className='btn loading btn-sm text-primary btn-outline btn-primary mb-4'>generating link</button>
				}
			</div>
		</div>
	);
};

export default GameStats;
