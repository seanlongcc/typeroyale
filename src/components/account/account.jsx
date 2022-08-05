import { RiPulseLine, RiFontSize, RiMedalLine } from 'react-icons/ri';
import { Navigate } from 'react-router-dom';

//add forgot password
const Account = ({user}) => {
	return (
		user
		? <div className='flex flex-col items-center justify-center h-screen '>
				<span>{user.displayName}</span>
				<div className='flex flex-row '>
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
							<div className='stat-value'>wpm</div>
							<div className='stat-desc'></div>
						</div>

						<div className='stat'>
							<div className='stat-figure text-secondary'></div>
							<div className='stat-title'>total characters</div>
							<div className='stat-value'>charsTyped</div>
							<div className='stat-desc'></div>
						</div>

						<div className='stat'>
							<div className='stat-figure text-secondary'></div>
							<div className='stat-title'>time</div>
							<div className='stat-value'>gameTimes</div>
							<div className='stat-desc'></div>
						</div>
					</div>
					{/* right */}
					<div className='stats stats-vertical'>
						<div className='stat'>
							<div className='stat-figure text-secondary'></div>
							<div className='stat-title'>characters per second</div>
							<div className='stat-value'>cps</div>
							<div className='stat-desc'></div>
						</div>

						<div className='stat'>
							<div className='stat-figure text-secondary'></div>
							<div className='stat-title'>incorrect characters</div>
							<div className='stat-value'>wrongChars</div>
							<div className='stat-desc'></div>
						</div>
						<div className='stat'>
							<div className='stat-figure text-secondary'></div>
							<div className='stat-title'>accuracy</div>
							<div className='stat-value'>accuracy%</div>
							<div className='stat-desc'></div>
						</div>
					</div>
				</div>
				<span className='text-5xl'>and more</span>
			</div>
		: <Navigate to="/login" />
	);
};

export default Account;

