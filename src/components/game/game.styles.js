import styled from 'styled-components';
import { COLORS } from '../../styles/colors';
import { FONT_SIZE, FONT_WEIGHT } from '../../styles/fonts';

const StyledGame = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	width: 16.875rem;
	height: 28.5625rem;
	border-radius: 1rem;
	padding: 1rem 0.625rem;
	background-color: ${COLORS.backofcards};
`;

const StyledGameTitle = styled.span`
	font-size: ${FONT_SIZE.m};
	font-weight: ${FONT_WEIGHT.bold};
`;

const StyledGameImage = styled.img`
	max-height: 330px;
	width: 250px;
	border-radius: 1rem;
`;

const StyledBuyButton = styled.button`
	height: 2.5rem;
	background-color: ${COLORS.blue};
	border: none;
	color: ${COLORS.white};
	font-weight: ${FONT_WEIGHT.bold};
	border-radius: 1rem;
	padding-block: 9px;
`;

const StyledInCartButton = styled.div`
	height: 2.5rem;
	display: flex;
	justify-content: space-between;
`;

const StyledInCart = styled.span`
	width: 13.0625rem;
	background-color: ${COLORS.pink};
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${COLORS.white};
	border-radius: 1rem;
`;

export {
	StyledGame,
	StyledGameTitle,
	StyledGameImage,
	StyledBuyButton,
	StyledInCartButton,
	StyledInCart
};
