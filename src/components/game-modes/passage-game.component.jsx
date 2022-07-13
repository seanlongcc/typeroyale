import { useState } from 'react';
import Button from '../button.component';

const PassageGame = () => {
	const [mode, setMode] = useState('all');
	return (
		<div className='grid grid-cols-5'>
			<Button label={'all'} mode={mode} setMode={setMode} />
			<Button label={'short'} mode={mode} setMode={setMode} />
			<Button label={'medium'} mode={mode} setMode={setMode} />
			<Button label={'long'} mode={mode} setMode={setMode} />
			<Button label={'omega'} mode={mode} setMode={setMode} />
		</div>
	);
};

export default PassageGame;
