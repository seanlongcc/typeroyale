import { Outlet, Link } from 'react-router-dom';
import {
	RiSettings3Line,
	RiGithubLine,
	RiUser3Line,
	RiSunLine,
	RiMoonLine,
} from 'react-icons/ri';
import { useEffect } from 'react';
import { themeChange } from 'theme-change';

// TODO: FIX LOGIN PADDING
const StaticElements = () => {
	useEffect(() => {
		themeChange(false);
		// 👆 false parameter is required for react project
	}, []);
	return (
		<div className='relative'>
			<Link
				className='absolute left-0 text-4xl font-bold p-10 hover:animate-pulse text-primary'
				to='/'
			>
				TypeRoyale
			</Link>
			<button className='absolute bottom-0 p-10 text-neutral-content'>
				<label class='swap swap-rotate'>
					<input type='checkbox' />
					<RiMoonLine
						class='swap-on fill-current w-5 h-5'
						data-set-theme='night'
						data-act-class='ACTIVECLASS'
					/>
					<RiSunLine
						class='swap-off fill-current w-5 h-5'
						data-set-theme='bumblebee'
						data-act-class='ACTIVECLASS'
					/>
				</label>

				{/* <RiSettings3Line className='w-5 h-5' /> */}
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
