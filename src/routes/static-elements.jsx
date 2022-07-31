import { Outlet, Link } from 'react-router-dom';
import { RiSettings3Line, RiGithubLine, RiUser3Line } from 'react-icons/ri';

// TODO: FIX LOGIN PADDING
const StaticElements = () => {
	return (
		<div className='relative'>
			<Link
				className='absolute left-0 text-4xl font-bold p-10 hover:animate-pulse text-primary'
				to='/'
			>
				TypeRoyale
			</Link>
			<button className='absolute bottom-0 p-10 hover:animate-spin text-neutral-content'>
				<RiSettings3Line className='w-5 h-5' />
			</button>
			<a
				className='absolute bottom-0 right-0 p-10 hover:animate-wiggle text-neutral-content'
				href='https://github.com/seanlongcc/typeroyale'
				rel='noopener noreferrer'
				target='_blank'
			>
				<RiGithubLine className='w-5 h-5' />
			</a>
			<button className='absolute right-0 pr-10 pt-14 hover:animate-pulse text-neutral-content'>
				<RiUser3Line className='w-5 h-5' />
			</button>
			<Outlet />
		</div>
	);
};

export default StaticElements;
