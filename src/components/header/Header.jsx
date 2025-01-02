import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<div>
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
			<nav>
				<ul>
					<NavLink to={'/'}>Home</NavLink>
					<NavLink to={'/gamestore'}>Game Store</NavLink>
					<NavLink to={'/checkout'}>Checkout</NavLink>
				</ul>
			</nav>
			<img src='/assets/images/hamburguer.svg' alt='hamburger' />
			<img src='/assets/images/cross.svg' alt='cross' />
		</div>
	);
};

export default Header;
