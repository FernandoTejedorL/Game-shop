import {
	StyledBuyButton,
	StyledGame,
	StyledGameImage,
	StyledGameTitle,
	StyledInCart,
	StyledInCartButton
} from './game.styles';

const Game = ({
	id,
	title,
	plattform,
	image,
	price,
	actionAdd,
	cart,
	actionDelete
}) => {
	const isInCart = cart.some(item => item.id === id);
	return (
		<StyledGame>
			<StyledGameTitle>
				{title} - {plattform}
			</StyledGameTitle>
			<StyledGameImage src={image} alt='game-image' />
			{!isInCart && (
				<StyledBuyButton
					id={id}
					onClick={() => actionAdd({ id, title, price, image, plattform })}
				>
					Buy - ${price.toFixed(2)}
				</StyledBuyButton>
			)}
			{isInCart && (
				<StyledInCartButton>
					<StyledInCart>In Cart</StyledInCart>
					<img
						onClick={() => actionDelete(id)}
						src='/assets/images/trash.svg'
						alt=''
					/>
				</StyledInCartButton>
			)}
		</StyledGame>
	);
};

export default Game;
