import { useState } from 'react';
import PracticeModes from '../components/practice/practice-modes.component';
import Clock from '../components/clock/clock.component';
import TextBox from '../components/text-box/text-box.component';

const Practice = () => {
	const [ready, setReady] = useState(false);

	return (
		<div className='flex flex-col items-center justify-center h-screen'>
			{/* conditional rendering: inline If with logical && operator, runs Clock if ready is true */}
			<span className='text-5xl'>{ready && <Clock />}</span>
			<span className=''>
				<TextBox />
			</span>
			<span className=''>
				<PracticeModes />
			</span>
			{/* button sets ready to true which starts the timer */}
			<button onClick={() => setReady(!ready)}>start</button>
		</div>
	);
};

export default Practice;
