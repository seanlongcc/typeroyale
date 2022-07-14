import { Outlet, Link } from 'react-router-dom';

const StaticElements = () => {
	return (
		<div className=''>
			<Link className='absolute left-0 text-4xl font-bold p-16' to='/'>
				TypeRoyale
			</Link>
			<button className='absolute bottom-0 p-16'>Settings</button>
			<a
				className='absolute bottom-0 right-0 p-16'
				href='https://github.com/seanlongcc/typeroyale'
				rel='noopener noreferrer'
				target='_blank'
			>
				GitHub
			</a>
			<button className='absolute right-0 p-16'>Log In</button>
			<Outlet />
		</div>
	);
};

export default StaticElements;
