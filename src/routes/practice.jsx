import PracticeModes from '../components/practice-modes/practice-modes';

const Practice = () => {
	return (
		<div>
			<div className='flex flex-col items-center justify-center h-screen'>
				<span>
					<PracticeModes />
				</span>
			</div>
			{/* <div className='flex flex-col items-center -mt-40'>
				<span>
					<button className='btn btn-xs no-animation btn-outline btn-primary'>
						tab
					</button>{' '}
					+{' '}
					<button className='btn btn-xs no-animation btn-outline btn-primary'>
						enter
					</button>{' '}
					- restart
				</span>
			</div> */}
		</div>
	);
};

export default Practice;
