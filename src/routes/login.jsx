import { Navigate } from 'react-router-dom';
import GoogleLogIn from '../components/login/google-login';
import Spinner from '../components/spinner/spinner';

const Login = ({ user, loading, error }) => {
	return (
		<div className='flex items-center h-screen justify-center'>
			{user && <Navigate to='/account' />}
			{loading ? <Spinner /> : <GoogleLogIn />}
		</div>
	);
};

export default Login;
