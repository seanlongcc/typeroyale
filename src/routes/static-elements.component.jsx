import { Outlet } from 'react-router-dom';

const StaticElements = () => {
	return (
		<div>
			<button className='absolute left-0 text-4xl font-bold p-5'>
				TypeRoyal
			</button>
			<button className='absolute bottom-0 p-5'>Settings</button>
			<h1 className='absolute bottom-0 right-0 p-5'>Version 1.0.0</h1>
			<button className='absolute right-0 p-5'>Log In</button>
			<Outlet />
		</div>
	);
};

export default StaticElements;
