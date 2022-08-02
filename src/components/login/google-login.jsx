import { RiGoogleFill } from 'react-icons/ri';
import { Link, Outlet } from 'react-router-dom';
//add forgot password
const GoogleLogIn = () => {
	return (
		<div className='flex flex-col'>
			<div>
				<Link className='btn btn-wide btn-primary' to='/account '>
					<button type='submit' className='btn btn-wide btn-primary'>
						<RiGoogleFill className='w-5 h-5' />
						&nbsp; google sign in
					</button>
				</Link>
			</div>
			<Outlet />
		</div>
	);
};

export default GoogleLogIn;
