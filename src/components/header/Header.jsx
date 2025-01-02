import { NavLink } from 'react-router-dom';
import {
	StyledCross,
	StyledHamburger,
	StyledHeader,
	StyledIcons,
	StyledNav,
	StyledUl
} from './header.styles';
import { useState } from 'react';

const Header = () => {
	const [showMenu, setShowMenu] = useState(false);

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
					<NavLink to={'/'}>Home</NavLink>
					<NavLink to={'/gamestore'}>Game Store</NavLink>
					<NavLink to={'/checkout'}>Checkout</NavLink>
				</StyledUl>
			</StyledNav>
		</StyledHeader>
	);
};

export default Header;
