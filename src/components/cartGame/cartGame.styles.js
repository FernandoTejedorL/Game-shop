import styled from 'styled-components';
import { COLORS } from '../../styles/colors';
import { FONT_WEIGHT } from '../../styles/fonts';

const StyledCartGame = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	width: 16.875rem;
	height: 28.5625rem;
	border-radius: 1rem;
	padding: 1rem 0.625rem;
	background-color: ${COLORS.backofcards};

	@media screen and (width>=768px) {
		width: 651px;
		height: 252px;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
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
`;
export {
	StyledCartGame,
	StyledGCImage,
	StyledTitleAndTrash,
	StyledBotOfCard,
	StyledExtraBuy
};
