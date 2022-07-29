import { useState } from 'react';
import Button from '../button/button';

const PassageGame = () => {
	const [mode, setMode] = useState('medium');
	return (
		<div className='grid grid-cols-5'>
			<Button label={'all'} mode={mode} setMode={setMode} />
			<Button label={'short'} mode={mode} setMode={setMode} />
			<Button label={'medium'} mode={mode} setMode={setMode} />
			<Button label={'long'} mode={mode} setMode={setMode} />
			<Button label={'custom'} mode={mode} setMode={setMode} />
		</div>
	);
};

export default PassageGame;
