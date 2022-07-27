import { Outlet, Link } from 'react-router-dom';
// TODO: FIX LOGIN PADDING 
const StaticElements = () => {
	return (
		<div className=''>
			<Link
				className='absolute left-0 text-4xl font-bold p-10 hover:animate-pulse'
				to='/'
			>
				TypeRoyale
			</Link>
			<button className='absolute bottom-0 p-10 hover:animate-pulse'>
				Settings
			</button>
			<a
				className='absolute bottom-0 right-0 p-10 hover:animate-pulse'
				href='https://github.com/seanlongcc/typeroyale'
				rel='noopener noreferrer'
				target='_blank'
			>
				GitHub
			</a>
			<button className='absolute right-0 pr-10 pt-14 hover:animate-pulse'>
				Log In
			</button>
			<Outlet />
		</div>
	);
};

export default StaticElements;
