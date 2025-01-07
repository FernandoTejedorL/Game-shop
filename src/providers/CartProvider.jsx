import { useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import { GAMES_INFO } from '../constants/games-info';

const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	const [filteredGames, setFilteredGames] = useState(GAMES_INFO); // para que aparezcan todos los juegos el principio
	const [selectedFilters, setSelectedFilters] = useState([]); // para ir metiendo los filtros de los checkbox
	const [searchText, setSearchText] = useState(''); // para buscar por texto

	const addToCart = game => {
		setCart([...cart, game]);
	};
	const deleteFromCart = id => {
		setCart(cart.filter(item => item.id !== id));
	};

	const applyFilters = (filters, text) => {
		let games = GAMES_INFO;

		if (filters.length > 0) {
			games = games.filter(game => filters.includes(game.plattform));
		}

		if (text) {
			games = games.filter(game =>
				game.title.toLowerCase().includes(text.toLowerCase())
			);
		}

		setFilteredGames(games);
	};

	const filterByText = text => {
		setSearchText(text); // Actualizar el texto de búsqueda
		applyFilters(selectedFilters, text);
	};

	const filterGames = filter => {
		const newFilters = selectedFilters.includes(filter)
			? selectedFilters.filter(item => item !== filter) // Quitar filtro del array de filtro por platafora
			: [...selectedFilters, filter]; // Agregar filtro al array de filtro por plataforma

		setSelectedFilters(newFilters);
		applyFilters(newFilters, searchText);
	};

	return (
		<CartContext.Provider
			value={{
				cart,
				setCart,
				addToCart,
				deleteFromCart,
				filteredGames,
				setFilteredGames,
				filterGames,
				filterByText
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;
