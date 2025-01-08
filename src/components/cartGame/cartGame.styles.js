import styled from 'styled-components';
import { COLORS } from '../../styles/colors';
import { FONT_WEIGHT } from '../../styles/fonts';

const StyledCartGame = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	width: 16.875rem;
	border-radius: 1rem;
	padding: 1rem 0.625rem;
	background-color: ${COLORS.backofcards};

	@media screen and (width>=768px) {
		width: 100%;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding: 1rem 2rem;
	}
`;

const StyledToBig = styled.div`
	@media screen and (width>=768px) {
		width: 100%;
		display: flex;
		justify-content: space-between;
		flex-direction: column;
	}
`;

const StyledAllToBig = styled.div`
	@media screen and (width>=768px) {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 1.5rem;
	}
`;

const StyledGCImage = styled.img`
	height: 330px;
	width: 250px;
	border-radius: 1rem;

	@media screen and (width>=768px) {
		width: 147px;
		height: 188px;
	}
`;

const StyledTitleAndTrash = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
`;

const StyledBotOfCard = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-weight: ${FONT_WEIGHT.bold};

	@media screen and (width>=768px) {
		width: 100%;
		height: 100%;
		align-items: start;
		flex-direction: column;
	}
`;

const StyledExtraBuy = styled.button`
	height: 2.8125rem;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${COLORS.blue};
	color: ${COLORS.white};
	border-radius: 1rem;
	border: none;
	width: 100%;
	margin-top: 1rem;
`;
export {
	StyledCartGame,
	StyledGCImage,
	StyledTitleAndTrash,
	StyledBotOfCard,
	StyledExtraBuy,
	StyledToBig,
	StyledAllToBig
};
