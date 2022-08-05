import { Navigate, Outlet } from 'react-router-dom';
import GoogleLogIn from '../components/login/google-login';

const Spinner = () => {
	return(
		<div className="flex justify-center items-center">
			<div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
				<span className="visually-hidden">Loading...</span>
			</div>
		</div>
	);
};

const Login = ({user, loading, error}) => {
	return (
		<div className='flex items-center h-screen justify-center space-x-40'>
			{user && <Navigate to="/account" />}
			{loading ? <Spinner /> : <GoogleLogIn />}	
		</div>
	);
};

export default Login;
