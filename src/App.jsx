import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router';
import { GlobalStyles } from './styles/GlobalStyles';
import CartProvider from './providers/CartProvider';

const App = () => {
	return (
		<>
			<GlobalStyles />
			<CartProvider>
				<BrowserRouter>
					<Router />
				</BrowserRouter>
			</CartProvider>
		</>
	);
};

export default App;
