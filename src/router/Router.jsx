import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import Layout from '../layouts/Layout';
import GameStore from '../pages/gameStore/GameStore';
import CheckOut from '../pages/checkOut/CheckOut';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='/gamestore' element={<GameStore />} />
				<Route path='/checkout' element={<CheckOut />} />
			</Route>
		</Routes>
	);
};

export default Router;
