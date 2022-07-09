import { Link, Outlet } from 'react-router-dom';

const Start = () => {
	return (
		<div
			className='text-2xl grid grid-rows-3 items-center justify-center h-screen 
		border-8 border-solid border-red-600'
		>
			<Link to='/practice'>Practice</Link>
			<Link to='/multiplayer'>Multiplayer</Link>
			<Outlet />
		</div>
	);
};

export default Start;
