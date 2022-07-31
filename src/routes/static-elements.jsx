import { Outlet, Link } from 'react-router-dom';
import { RiSettings3Line, RiGithubLine, RiUser3Line } from 'react-icons/ri';

// TODO: FIX LOGIN PADDING
const StaticElements = () => {
	return (
		<div className=''>
			<Link
				className='fixed left-0 text-4xl font-bold p-10 hover:animate-pulse text-primary'
				to='/'
			>
				TypeRoyale
			</Link>
			<button className='fixed bottom-0 p-10 hover:animate-pulse'>
				<RiSettings3Line className='w-5 h-5' />
			</button>
			<a
				className='fixed bottom-0 right-0 p-10 hover:animate-pulse'
				href='https://github.com/seanlongcc/typeroyale'
				rel='noopener noreferrer'
				target='_blank'
			>
				<RiGithubLine className='w-5 h-5' />
			</a>
			<button className='fixed right-0 pr-10 pt-14 hover:animate-pulse'>
				<RiUser3Line className='w-5 h-5' />
			</button>
			<Outlet />
		</div>
	);
};

export default StaticElements;
