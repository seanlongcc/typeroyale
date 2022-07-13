import { useState, useEffect } from 'react';
import Button from '../button/button.component';
import ClockDown from '../clock-down/clock-down.component';
import TextBox from '../text-box/text-box.component';

const validChars =
	'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,/\'"!?@#$%^&*()_+-=<>\\|`~[]{};: ';

const TimeGame = () => {
	const [mode, setMode] = useState('60');
	const [ready, setReady] = useState(false);

	//second parameter of [mode] makes it conditionally fire and depends on mode
	useEffect(() => {
		document.onkeydown = (e) => {
			if (validChars.includes(e.key)) {
				setReady(true);
			}
		};
	}, [mode]);

	return (
		<div>
			<span className='flex flex-col items-center text-5xl'>
				{ready && <ClockDown gameTime={mode} />}
			</span>
			<span>{<TextBox />}</span>
			{/* conditional rendering: inline If with logical && operator, run Clock if ready is true */}
			<span className='grid grid-cols-5'>
				<Button label={'15'} mode={mode} setMode={setMode} />
				<Button label={'30'} mode={mode} setMode={setMode} />
				<Button label={'60'} mode={mode} setMode={setMode} />
				<Button label={'120'} mode={mode} setMode={setMode} />
				<Button label={'custom'} mode={mode} setMode={setMode} />
			</span>
		</div>
	);
};

export default TimeGame;
