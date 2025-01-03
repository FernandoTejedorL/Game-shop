import Game from '../../components/game/Game';
import PlattformsFilter from '../../components/plattformsFilter/PlattformsFilter';
import { GAMES_INFO } from '../../constants/games-info';
import {
	StyledGamestoreMain,
	StyledHeader,
	StyledSearch,
	StyledTextInput
} from './gamestore.styles';

const GameStore = () => {
	return (
		<StyledGamestoreMain>
			<StyledHeader>Game Store</StyledHeader>
			<StyledSearch>
				<img src='/assets/images/search.svg' alt='' />
				<StyledTextInput type='text' placeholder='Search your game...' />
			</StyledSearch>
			<PlattformsFilter />
			<div>
				{GAMES_INFO.map(game => (
					<Game key={game.id} {...game} />
				))}
			</div>
		</StyledGamestoreMain>
	);
};
export default GameStore;
