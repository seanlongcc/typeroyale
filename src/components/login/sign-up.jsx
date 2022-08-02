import { RiUserAddLine } from 'react-icons/ri';

const SignUp = () => {
	return (
		<div className='flex flex-col w-80'>
			<form className='space-y-4'>
				<span>register</span>
				<input
					type='text'
					placeholder='username'
					required
					class='input input-bordered input-primary w-full max-w-xs'
				/>
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
				<input
					type='password'
					placeholder='confirm password'
					required
					class='input input-bordered input-primary w-full max-w-xs'
				/>
				<div>
					<button type='submit' className='btn btn-block btn-primary'>
						<RiUserAddLine className='w-5 h-5' /> &nbsp; sign up
					</button>
				</div>
			</form>
		</div>
	);
};

export default SignUp;
