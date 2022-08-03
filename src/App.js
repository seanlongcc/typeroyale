import { Routes, Route } from 'react-router-dom';
import StaticElements from './routes/static-elements';
import Start from './routes/start';
import Practice from './routes/practice';
import Multiplayer from './routes/multiplayer';
import Login from './routes/login';
import Account from './components/account/account';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<StaticElements />}>
				<Route index element={<Start />} />
				<Route path='/practice' element={<Practice />} />
				<Route path='/multiplayer' element={<Multiplayer />} />
				<Route path='/login' element={<Login />} />
				<Route path='/account' element={<Account />} />
			</Route>
		</Routes>
	);
};

export default App;
