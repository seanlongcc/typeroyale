import { RiLoginBoxLine, RiGoogleFill } from 'react-icons/ri';
//add forgot password
const SignIn = () => {
	return (
		<div className='flex flex-col w-80'>
			<form className='space-y-4'>
				<span>login</span>
				<input
					type='email'
					placeholder='email'
					required
					class='input input-bordered input-primary w-full max-w-xs'
				/>
				<input
					type='password'
					placeholder='password'
					required
					class='input input-bordered input-primary w-full max-w-xs'
				/>
				<div>
					<button type='submit' className='btn btn-block btn-primary'>
						<RiLoginBoxLine className='w-5 h-5' />
						&nbsp; sign in
					</button>
				</div>
				<div class='divider'>or</div>
				<div>
					<button type='submit' className='btn btn-block btn-primary'>
						<RiGoogleFill className='w-5 h-5' />
						&nbsp; google sign in
					</button>
				</div>
			</form>
		</div>
	);
};

export default SignIn;
