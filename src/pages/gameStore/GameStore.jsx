import { useContext } from 'react';
import Game from '../../components/game/Game';
import PlattformsFilter from '../../components/plattformsFilter/PlattformsFilter';
import { GAMES_INFO } from '../../constants/games-info';
import {
	StyledGamesContainer,
	StyledGamestoreMain,
	StyledHeader,
	StyledSearch,
	StyledTextInput
} from './gamestore.styles';
import { CartContext } from '../../contexts/CartContext';

const GameStore = () => {
	const { addToCart, cart, deleteFromCart } = useContext(CartContext);
	return (
		<StyledGamestoreMain>
			<StyledHeader>Game Store</StyledHeader>
			<StyledSearch>
				<img src='/assets/images/search.svg' alt='' />
				<StyledTextInput type='text' placeholder='Search your game...' />
			</StyledSearch>
			<PlattformsFilter />
			<StyledGamesContainer>
				{GAMES_INFO.map(game => (
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
