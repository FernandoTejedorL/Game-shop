import { CartContext } from '../../contexts/CartContext';
import {
	StyledCounter,
	StyledCross,
	StyledHamburger,
	StyledHeader,
	StyledIcons,
	StyledNav,
	StyledNavLink,
	StyledUl
} from './header.styles';
import { useContext, useState } from 'react';

const Header = () => {
	const [showMenu, setShowMenu] = useState(false);
	const { cart } = useContext(CartContext);

	return (
		<StyledHeader>
			<StyledIcons>
				<picture>
					<source
						media='(min-width: 767px )'
						srcSet='/assets/images/logos/logo-desktop.png'
					/>
					<source
						media='(min-width: 360px )'
						srcSet='/assets/images/logos/logo-mobile.png'
					/>
					<img src='/assets/images/logos/logo-mobile.png' alt='logo' />
				</picture>
				<StyledHamburger
					$show={showMenu}
					onClick={() => setShowMenu(true)}
					src='/assets/images/hamburguer.svg'
					alt='hamburger'
				/>
				<StyledCross
					$show={showMenu}
					onClick={() => setShowMenu(false)}
					src='/assets/images/cross.svg'
					alt='cross'
				/>
			</StyledIcons>
			<StyledNav $show={showMenu}>
				<StyledUl>
					<StyledNavLink to={'/'}>Home</StyledNavLink>
					<StyledNavLink to={'/gamestore'}>Game Store</StyledNavLink>
					<StyledNavLink to={'/checkout'}>Checkout</StyledNavLink>
				</StyledUl>
			</StyledNav>
			<StyledCounter $show={showMenu}>{cart.length}</StyledCounter>
		</StyledHeader>
	);
};

export default Header;
