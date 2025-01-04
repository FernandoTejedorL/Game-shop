import { useContext } from 'react';
import Game from '../../components/game/Game';
import PlattformsFilter from '../../components/plattformsFilter/PlattformsFilter';
import {
	StyledGamesContainer,
	StyledGamestoreMain,
	StyledHeader,
	StyledSearch,
	StyledTextInput
} from './gamestore.styles';
import { CartContext } from '../../contexts/CartContext';

const GameStore = () => {
	const { addToCart, cart, deleteFromCart, filteredGames } =
		useContext(CartContext);
	return (
		<StyledGamestoreMain>
			<StyledHeader>Game Store</StyledHeader>
			<StyledSearch>
				<img src='/assets/images/search.svg' alt='' />
				<StyledTextInput type='text' placeholder='Search your game...' />
			</StyledSearch>
			<PlattformsFilter />
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
		</StyledGamestoreMain>
	);
};
export default GameStore;
