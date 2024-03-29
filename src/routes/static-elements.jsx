import { Outlet, Link } from 'react-router-dom';
import {
	RiGithubLine,
	RiUser3Line,
	RiLogoutBoxLine,
	RiBarChart2Line,
} from 'react-icons/ri';
import { useEffect } from 'react';
import { themeChange } from 'theme-change';
import ThemePicker from '../components/theme-picker/theme-picker';
import { logout } from '../firebase/firebase';

const StaticElements = ({ user }) => {
	useEffect(() => {
		themeChange(false);
	}, []);

	return (
		<div className='overflow-auto scrollbar'>
			{/* title */}
			<Link
				className='absolute left-0 text-4xl font-bold p-10 hover:animate-pulse text-primary'
				to='/'
				tabIndex={-1}
			>
				TypeRoyale
			</Link>
			{/* theme change */}
			<ThemePicker />
			{/* github link */}
			<a
				className='fixed bottom-0 right-0 p-10 hover:animate-pulse'
				href='https://github.com/seanlongcc/typeroyale'
				rel='noopener noreferrer'
				target='_blank'
				tabIndex={-1}
			>
				<RiGithubLine className='w-5 h-5' />
			</a>

			{user ? (
				<div className='absolute right-0 pr-10 pt-14 '>
					<div className='dropdown dropdown-bottom dropdown-end '>
						<button tabIndex={-1}>
							<RiUser3Line className='w-5 h-5' />
						</button>
						<ul
							tabIndex={-1}
							className='dropdown-content menu p-2 shadow bg-primary rounded-box w-32'
						>
							<li>
								<Link to='/account' tabIndex={-1}>
									<RiBarChart2Line className='w-5 h-5' />
									stats
								</Link>
							</li>
							<li>
								<button onClick={logout}>
									<RiLogoutBoxLine className='w-5 h-5' />
									logout
								</button>
							</li>
						</ul>
					</div>
				</div>
			) : (
				<Link to='/login' tabIndex={-1}>
					<button
						className='absolute right-0 pr-10 pt-14 hover:animate-pulse'
						tabIndex={-1}
					>
						<RiUser3Line className='w-5 h-5' />
					</button>
				</Link>
			)}
			<Outlet />
		</div>
	);
};

export default StaticElements;
