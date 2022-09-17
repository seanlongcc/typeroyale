import { Routes, Route } from 'react-router-dom';
import StaticElements from './routes/static-elements';
import Start from './routes/start';
import Practice from './routes/practice';
import AsyncRace from './routes/async-race';
import Multiplayer from './routes/multiplayer';
import Login from './routes/login';
import Account from './components/account/account';
import { auth } from './firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const App = () => {
	const [user, loading, error] = useAuthState(auth);

	return (
		<Routes>
			<Route path='/' element={<StaticElements user={user} />}>
				<Route index element={<Start />} />
				<Route path='/practice' element={<Practice user={user} />} />
				<Route path='/async-race' element={<AsyncRace user={user} />} />
				<Route path='/multiplayer' element={<Multiplayer />} />
				<Route
					path='/login'
					element={<Login user={user} loading={loading} error={error} />}
				/>
				<Route path='/account' element={<Account user={user} />} />
			</Route>
		</Routes>
	);
};

export default App;
