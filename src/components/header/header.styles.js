import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

const StyledHeader = styled.header`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 2rem 1.5rem;
	background-color: ${COLORS.black};
	border-radius: 1rem;
	padding: 1.1875rem 2rem;
`;

const StyledIcons = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
`;

const StyledHamburger = styled.img`
	display: ${({ $show }) => ($show ? 'none' : 'block')};
`;

const StyledCross = styled.img`
	display: ${({ $show }) => ($show ? 'block' : 'none')};
`;

const StyledNav = styled.nav`
	display: ${({ $show }) => ($show ? 'block' : 'none')};
`;

const StyledUl = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 1.5rem;
	gap: 2rem;
`;

export {
	StyledHeader,
	StyledIcons,
	StyledHamburger,
	StyledCross,
	StyledNav,
	StyledUl
};
