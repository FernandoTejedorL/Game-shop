import { useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import { GAMES_INFO } from '../constants/games-info';

const CartProvider = ({ children }) => {
	const [filteredGames, setFilteredGames] = useState(GAMES_INFO);
	const [selectedFilters, setSelectedFilters] = useState([]);

	const filterGames = filter => {
		let newFilters = [];
		if (selectedFilters.includes(filter)) {
			// primero comprueba para que al quitar el check lo saque de la nueva lista de filtros
			newFilters = selectedFilters.filter(item => item !== filter);
		} else {
			//al marcar el check hace que entre al nuevo listado de filtros
			newFilters = [...selectedFilters, filter];
		}
		setSelectedFilters(newFilters);

		if (newFilters.length === 0) {
			setFilteredGames(GAMES_INFO);
		} else {
			setFilteredGames(
				GAMES_INFO.filter(game => newFilters.includes(game.plattform))
			);
		}
	};

	const [cart, setCart] = useState([]);

	const addToCart = game => {
		setCart([...cart, game]);
	};
	const deleteFromCart = id => {
		setCart(cart.filter(item => item.id !== id));
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
				filterGames
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;
