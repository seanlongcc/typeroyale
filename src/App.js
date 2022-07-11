import { Routes, Route } from 'react-router-dom';
import StaticElements from './routes/static-elements.component';
import Start from './routes/start.component';
import Practice from './routes/practice.component';
import Multiplayer from './routes/multiplayer.component';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<StaticElements />}>
				<Route index element={<Start />} />
				<Route path='/practice' element={<Practice />} />
				<Route path='/multiplayer' element={<Multiplayer />} />
			</Route>
		</Routes>
	);
};

export default App;
