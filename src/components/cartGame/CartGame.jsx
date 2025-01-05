import { GAMES_INFO } from '../../constants/games-info';
import {
	StyledBotOfCard,
	StyledCartGame,
	StyledExtraBuy,
	StyledGCImage,
	StyledTitleAndTrash
} from './cartGame.styles';

const CartGame = ({
	image,
	title,
	plattform,
	price,
	actionDelete,
	id,
	addToCart,
	cart
}) => {
	const otherVersions = isInOther(title, plattform);
	console.log(otherVersions);
	const availableVersion = otherVersions.find(
		version => !cart.some(game => game.id === version.id)
	);
	return (
		<StyledCartGame>
			<StyledGCImage src={image} alt='game-image' />
			<StyledBotOfCard>
				<StyledTitleAndTrash>
					<span>
						{title} - {plattform}
					</span>
					<img
						onClick={() => actionDelete(id)}
						src='/assets/images/trash.svg'
						alt='delete-item'
					/>
				</StyledTitleAndTrash>
				<span>${price.toFixed(2)}</span>
			</StyledBotOfCard>
			{availableVersion && (
				<StyledExtraBuy onClick={() => addToCart(availableVersion)}>
					Buy for {availableVersion.plattform}
				</StyledExtraBuy>
			)}
		</StyledCartGame>
	);
};

const isInOther = (title, plattform) => {
	const duplicateds = GAMES_INFO.filter(
		game => game.title === title && game.plattform !== plattform
	);
	if (!duplicateds) {
		return false;
	} else {
		return duplicateds;
	}
};

export default CartGame;
