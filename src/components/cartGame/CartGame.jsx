import { GAMES_INFO } from '../../constants/games-info';
import {
	StyledAllToBig,
	StyledBotOfCard,
	StyledCartGame,
	StyledExtraBuy,
	StyledGCImage,
	StyledTitleAndTrash,
	StyledToBig
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
	const availableVersion = otherVersions.find(
		item => !cart.some(game => game.id === item.id)
	);
	return (
		<StyledCartGame>
			<StyledGCImage src={image} alt='game-image' />
			<StyledAllToBig>
				<StyledToBig>
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
				</StyledToBig>
				{availableVersion && (
					<StyledExtraBuy onClick={() => addToCart(availableVersion)}>
						Buy for {availableVersion.plattform}
					</StyledExtraBuy>
				)}
			</StyledAllToBig>
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
