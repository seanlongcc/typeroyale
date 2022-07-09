import { Outlet, Link } from 'react-router-dom';

const StaticElements = () => {
	return (
		<div>
			<Link className='absolute left-0 text-4xl font-bold p-5' to='/'>
				TypeRoyal
			</Link>
			<button className='absolute bottom-0 p-5'>Settings</button>
			<h1 className='absolute bottom-0 right-0 p-5'>Version 1.0.0</h1>
			<button className='absolute right-0 p-5'>Log In</button>
			<Outlet />
		</div>
	);
};

export default StaticElements;
