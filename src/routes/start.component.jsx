import { Outlet } from 'react-router-dom';

const Start = () => {
	return (
		<div className='grid grid-rows-3 items-center justify-center h-screen'>
			<h1 className='text-3xl'>Start</h1>
			<button className='text-1xl'>Practice</button>
			<button className='text-1xl'>Multiplayer</button>
			<Outlet />
		</div>
	);
};

export default Start;
