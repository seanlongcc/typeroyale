import { RiGoogleFill } from 'react-icons/ri';
import { signInWithGoogle } from '../../firebase/firebase';

const GoogleLogIn = () => {
	return (
		<div className='flex flex-col'>
			<div>
				<button
					type='submit'
					className='btn btn-wide btn-primary'
					onClick={signInWithGoogle}
				>
					<RiGoogleFill className='w-5 h-5' />
					&nbsp; google sign in
				</button>
			</div>
		</div>
	);
};

export default GoogleLogIn;
