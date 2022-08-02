import { Outlet } from 'react-router-dom';
import SignIn from '../components/login/sign-in';
import SignUp from '../components/login/sign-up';
import GoogleLogIn from '../components/login/google-login';

const Login = () => {
	return (
		<div className='flex items-center h-screen justify-center space-x-40'>
			<GoogleLogIn />
			<Outlet />
		</div>
	);
};

export default Login;
