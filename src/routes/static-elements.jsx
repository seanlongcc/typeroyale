import { Outlet, Link } from 'react-router-dom';
import { RiGithubLine, RiUser3Line } from 'react-icons/ri';
import { useEffect } from 'react';
import { themeChange } from 'theme-change';
import ThemePicker from '../components/theme-picker/theme-picker';

const StaticElements = () => {
	useEffect(() => {
		themeChange(false);
	}, []);

	return (
		<div className='relative'>
			{/* title */}
			<Link
				className='absolute left-0 text-4xl font-bold p-10 hover:animate-pulse text-primary'
				to='/'
			>
				TypeRoyale
			</Link>
			{/* theme change */}
			<ThemePicker />
			{/* github link */}
			<a
				className='absolute bottom-0 right-0 p-10 hover:animate-pulse'
				href='https://github.com/seanlongcc/typeroyale'
				rel='noopener noreferrer'
				target='_blank'
			>
				<RiGithubLine className='w-5 h-5' />
			</a>
			{/* user login */}
			<Link to='/login'>
				<button className='absolute right-0 pr-10 pt-14 hover:animate-pulse'>
					<RiUser3Line className='w-5 h-5' />
				</button>
			</Link>

			<Outlet />
		</div>
	);
};

export default StaticElements;
