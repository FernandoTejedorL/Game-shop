import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

const StyledPlattformsSelectorDiv = styled.div`
	display: flex;
	flex-direction: column;
	width: 269px;
	border-radius: 1rem;
	padding-block: 1.375rem;
	gap: 32px;
	align-items: center;
	background-color: ${COLORS.background};
`;

const StyledPlatSelDiv = styled.div`
	display: flex;
	gap: 81px;
`;

const StyledChevron = styled.img`
	rotate: ${({ $plattHidder }) => ($plattHidder ? '-180deg' : '0deg')};
	transition: rotate 0.2s;
`;

const StyledPlattSelector = styled.div`
	display: ${({ $plattHidder }) => ($plattHidder ? 'none' : 'flex')};
	flex-direction: column;
	gap: 2rem;
`;

export {
	StyledPlattformsSelectorDiv,
	StyledPlatSelDiv,
	StyledChevron,
	StyledPlattSelector
};