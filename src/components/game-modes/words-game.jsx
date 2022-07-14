import { useState } from 'react';
import Button from '../button/button';

const WordsGame = () => {
	const [mode, setMode] = useState('60');
	return (
		<div className='grid grid-cols-5'>
			<Button label={'15'} mode={mode} setMode={setMode} />
			<Button label={'30'} mode={mode} setMode={setMode} />
			<Button label={'60'} mode={mode} setMode={setMode} />
			<Button label={'100'} mode={mode} setMode={setMode} />
			<Button label={'custom'} mode={mode} setMode={setMode} />
		</div>
	);
};

export default WordsGame;
