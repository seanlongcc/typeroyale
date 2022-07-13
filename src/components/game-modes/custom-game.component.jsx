import { useState } from 'react';
import Button from '../button/button.component';

const CustomGame = () => {
	const [mode, setMode] = useState('change');
	return (
		<div className='grid'>
			<Button label={'change'} mode={mode} setMode={setMode} />
		</div>
	);
};

export default CustomGame;
