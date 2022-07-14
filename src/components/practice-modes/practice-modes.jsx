import { useState } from 'react';

import Button from '../button/button';
import TimeGame from '../game-modes/time-game';
import WordsGame from '../game-modes/words-game';
import PassageGame from '../game-modes/passage-game';
import CustomGame from '../game-modes/custom-game.jsx';

const PracticeModes = () => {
	const [mode, setMode] = useState('time');

	//time is default since state starts as time
	const renderMode = () => {
		switch (mode) {
			case 'words':
				return <WordsGame />;
			case 'time':
				return <TimeGame />;
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
			<span>{renderMode()}</span>
			<span className='grid grid-cols-4 '>
				<Button label={'time'} mode={mode} setMode={setMode} />
				<Button label={'words'} mode={mode} setMode={setMode} />
				<Button label={'passage'} mode={mode} setMode={setMode} />
				<Button label={'custom'} mode={mode} setMode={setMode} />
			</span>
		</div>
	);
};

export default PracticeModes;
