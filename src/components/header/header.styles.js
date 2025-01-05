import styled from 'styled-components';
import { COLORS } from '../../styles/colors';
import { NavLink } from 'react-router-dom';
import { FONT_SIZE } from '../../styles/fonts';

const StyledHeader = styled.header`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 2rem 1.5rem;
	background-color: ${COLORS.black};
	border-radius: 1rem;
	padding: 1.1875rem 2rem;

	@media screen and (width>=768px) {
		flex-direction: row;
	}
`;

const StyledIcons = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
`;

const StyledHamburger = styled.img`
	display: ${({ $show }) => ($show ? 'none' : 'block')};

	@media screen and (width>=768px) {
		display: none;
	}
`;

const StyledCross = styled.img`
	display: ${({ $show }) => ($show ? 'block' : 'none')};

	@media screen and (width>=768px) {
		display: none;
	}
`;

const StyledNav = styled.nav`
	display: ${({ $show }) => ($show ? 'block' : 'none')};

	@media screen and (width>=768px) {
		display: block;
	}
`;

const StyledUl = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 1.5rem;
	gap: 2rem;

	@media screen and (width>=768px) {
		flex-direction: row;
		gap: 83px;
		width: 500px;
		justify-content: flex-end;
	}
`;

const StyledNavLink = styled(NavLink)`
	font-size: ${FONT_SIZE.l};
	color: ${COLORS.blue};
	&.active {
		color: ${COLORS.pink};
	}
`;

const StyledCounter = styled.div`
	position: absolute;
	top: ${({ $show }) => ($show ? '226px' : '0.8125rem')};
	right: ${({ $show }) => ($show ? '4.5rem' : '0.875rem')};
	display: flex;
	align-items: center;
	justify-content: center;
	height: 1.5rem;
	width: 1.5rem;
	color: ${COLORS.pink};
	background-color: ${COLORS.blue};
	border-radius: 50%;

	@media screen and (width>=768px) {
		top: 60px;
		right: 1rem;
	}
`;

export {
	StyledHeader,
	StyledIcons,
	StyledHamburger,
	StyledCross,
	StyledNav,
	StyledUl,
	StyledNavLink,
	StyledCounter
};
