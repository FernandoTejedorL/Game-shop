import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import CartGame from '../../components/cartGame/CartGame';
import {
	StyledCartContainer,
	StyledEachPrice,
	StyledGiftContainer,
	StyledGiftText,
	StyledMain,
	StyledMainToBig,
	StyledMainToBigBottom,
	StyledOrderButton,
	StyledSummary,
	StylegGiftImg
} from './checkout.styles';

const CheckOut = () => {
	const { cart, deleteFromCart, addToCart } = useContext(CartContext);
	const totalNetPrice = cart.reduce((acc, item) => acc + item.price, 0);
	const giftCard = Math.floor(totalNetPrice * 0.1).toFixed(0);
	const finalPrice = (totalNetPrice * 1.21).toFixed(2);
	return (
		<StyledMain>
			<h3>Checkout</h3>
			<StyledMainToBig>
				<StyledCartContainer>
					{cart.map(item => (
						<CartGame
							key={item.id}
							{...item}
							cart={cart}
							actionDelete={deleteFromCart}
							addToCart={addToCart}
						/>
					))}
				</StyledCartContainer>
				<StyledMainToBigBottom>
					<StyledGiftContainer>
						<StylegGiftImg src='/assets/images/gift.png' alt='' />
						<StyledGiftText>
							With this purchase you earn a ${giftCard} gift card for your next
							purchases.
						</StyledGiftText>
					</StyledGiftContainer>
					<StyledSummary>
						<StyledEachPrice>
							<span>Subtotal</span>
							<span>${totalNetPrice.toFixed(2)}</span>
						</StyledEachPrice>
						<StyledEachPrice>
							<span>VAT</span>
							<span>21%</span>
						</StyledEachPrice>
						<StyledEachPrice>
							<span>Total</span>
							<span>${finalPrice}</span>
						</StyledEachPrice>
						<StyledOrderButton>Order Items</StyledOrderButton>
					</StyledSummary>
				</StyledMainToBigBottom>
			</StyledMainToBig>
		</StyledMain>
	);
};
export default CheckOut;
