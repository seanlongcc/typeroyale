import { useState } from 'react';

import Button from '../button/button';
import TimeGame from '../game-modes/time-game';
import WordsGame from '../game-modes/words-game';
import PassageGame from '../game-modes/passage-game';
import CustomGame from '../game-modes/custom-game.jsx';

const PracticeModes = () => {
	const [mode, setMode] = useState('time');
	const [ready, setReady] = useState(false);
	const [typed, setTyped] = useState({ val: '', keysPressed: 0 });

	//time is default since state starts as time
	const renderMode = () => {
		switch (mode) {
			case 'words':
				return <WordsGame />;
			case 'time':
				return (
					<TimeGame
						ready={ready}
						setReady={setReady}
						typed={typed}
						setTyped={setTyped}
					/>
				);
			case 'passage':
				return <PassageGame />;
			case 'custom':
				return <CustomGame />;
			default:
				return <div />;
		}
	};

	return (
		<div>
			<span tabIndex={0}>{renderMode()}</span>
			<span className='grid grid-cols-4 '>
				{['time', 'words', 'passage', 'custom'].map((label, i) => (
					<Button
						key={i}
						label={label}
						mode={mode}
						setMode={setMode}
						{...setReady}
						{...setTyped}
					/>
				))}
			</span>
			<span className='flex flex-col items-center'>
				<button
					className='text-2xl hover:text-gray-400 hover:animate-pulse'
					onClick={() => {
						setReady(false);
						setTyped({ val: '', keysPressed: 0 });
						//focuses the <Textbox/> component through its id
						document.getElementById('text-box').focus();
					}}
				>
					Restart
				</button>
			</span>
		</div>
	);
};

export default PracticeModes;
