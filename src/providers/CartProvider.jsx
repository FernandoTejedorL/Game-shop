import { useState } from 'react';
import { CartContext } from '../contexts/CartContext';

const CartProvider = ({ children }) => {
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
				deleteFromCart
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;
