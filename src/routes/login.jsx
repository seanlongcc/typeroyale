import { Outlet } from 'react-router-dom';
import SignIn from '../components/login/sign-in';
import SignUp from '../components/login/sign-up';

const Login = () => {
	return (
		<div className='flex items-center h-screen justify-center space-x-40'>
			<SignUp />
			<SignIn />
			<Outlet />
		</div>
	);
};

export default Login;
