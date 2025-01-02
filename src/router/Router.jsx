import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import User from '../pages/user/User';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/about' element={<About />} />
			<Route path='/user/:username' element={<User />} />
		</Routes>
	);
};

export default Router;
