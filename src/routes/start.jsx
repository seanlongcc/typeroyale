import { Link, Outlet } from 'react-router-dom';

const Start = () => {
	return (
		<div
			className='text-2xl flex flex-col items-center justify-center h-screen 
		gap-y-10'
		>
			<Link className='hover:text-gray-400 hover:animate-pulse' to='/practice '>
				Practice
			</Link>
			<Link
				className='hover:text-gray-400 hover:animate-pulse'
				to='/multiplayer'
			>
				Multiplayer
			</Link>
			<Outlet />
		</div>
	);
};

export default Start;
