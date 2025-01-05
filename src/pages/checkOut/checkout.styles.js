import styled from 'styled-components';
import { COLORS } from '../../styles/colors';
import { FONT_WEIGHT } from '../../styles/fonts';

const StyledMain = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: ${COLORS.black};
	margin-inline: 1.5rem;
	padding-block: 1.5rem;
	gap: 1.5rem;
	border-radius: 1rem;

	@media screen and (width>=768px) {
		padding: 1.5rem;
		align-items: flex-start;
	}
`;

const StyledMainToBig = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: ${COLORS.black};
	gap: 1.5rem;
	border-radius: 1rem;
	width: 100%;

	@media screen and (width>=768px) {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-start;
	}
`;

const StyledCartContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
`;

const StyledGiftContainer = styled.div`
	@media screen and (width>=768px) {
		display: flex;
		align-items: center;
		background-color: ${COLORS.backofcards};
		padding: 2.125rem;
		border-radius: 1rem;
		width: 643px;
		margin-bottom: 1rem;
	}
`;

const StylegGiftImg = styled.img`
	display: none;

	@media screen and (width>=768px) {
		display: block;
	}
`;

const StyledGiftText = styled.p`
	margin-inline: 24px;
	font-weight: ${FONT_WEIGHT.bold};
	background-color: ${COLORS.backofcards};
	width: 261px;
	border-radius: 1rem;
	text-align: center;
	padding-block: 1rem;
`;

const StyledSummary = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	border-radius: 1rem;
	background-color: ${COLORS.backofcards};
	width: 16.875rem;
	padding: 1rem;

	@media screen and (width>=768px) {
		width: 643px;
	}
`;

const StyledEachPrice = styled.div`
	display: flex;
	justify-content: space-between;
`;

const StyledOrderButton = styled.div`
	height: 2.8125rem;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${COLORS.blue};
	color: ${COLORS.white};
	border-radius: 1rem;
	border: none;
`;

const StyledMainToBigBottom = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
`;

export {
	StyledMain,
	StyledCartContainer,
	StylegGiftImg,
	StyledGiftText,
	StyledSummary,
	StyledEachPrice,
	StyledOrderButton,
	StyledMainToBig,
	StyledMainToBigBottom,
	StyledGiftContainer
};
