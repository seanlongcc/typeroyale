import AsyncGameContainer from "../components/async-race/async-game-container";

const AsyncRace = () => {
	return (
		<div className='flex flex-col items-center justify-center h-screen'>
			<span>
				<AsyncGameContainer />
			</span>
		</div>
	);
};

export default AsyncRace;
