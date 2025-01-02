import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router';
import { GlobalStyles } from './styles/GlobalStyles';
import CounterProvider from './providers/CounterProvider';

const App = () => {
	return (
		<>
			<GlobalStyles />
			<CounterProvider>
				<BrowserRouter>
					<Router />
				</BrowserRouter>
			</CounterProvider>
		</>
	);
};

export default App;
