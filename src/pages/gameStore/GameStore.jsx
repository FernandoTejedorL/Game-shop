import { useContext, useState } from 'react';
import Game from '../../components/game/Game';
import PlattformsFilter from '../../components/plattformsFilter/PlattformsFilter';
import {
	StyledFiltersAndGames,
	StyledGamesContainer,
	StyledGamestoreMain,
	StyledHeader,
	StyledSearch,
	StyledTextInput
} from './gamestore.styles';
import { GAMES_INFO } from '../../constants/games-info';
import { CartContext } from '../../contexts/CartContext';

const GameStore = () => {
	const { cart, addToCart, deleteFromCart } = useContext(CartContext);

	const [filteredGames, setFilteredGames] = useState(GAMES_INFO); // para que aparezcan todos los juegos el principio
	const [selectedFilters, setSelectedFilters] = useState([]); // para ir metiendo los filtros de los checkbox
	const [searchText, setSearchText] = useState(''); // para buscar por texto

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
		<StyledGamestoreMain>
			<StyledHeader>Game Store</StyledHeader>
			<StyledSearch>
				<img src='/assets/images/search.svg' alt='' />
				<StyledTextInput
					type='text'
					onInput={input => filterByText(input.target.value)}
					placeholder='Search your game...'
				/>
			</StyledSearch>
			<StyledFiltersAndGames>
				<PlattformsFilter filterGames={filterGames} />
				<StyledGamesContainer>
					{filteredGames.map(game => (
						<Game
							key={game.id}
							{...game}
							cart={cart}
							actionAdd={addToCart}
							actionDelete={deleteFromCart}
						/>
					))}
				</StyledGamesContainer>
			</StyledFiltersAndGames>
		</StyledGamestoreMain>
	);
};
export default GameStore;
