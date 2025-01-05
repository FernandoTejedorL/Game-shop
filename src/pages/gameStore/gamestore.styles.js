import styled from 'styled-components';
import { COLORS } from '../../styles/colors';
import { FONT_SIZE, FONT_WEIGHT } from '../../styles/fonts';

const StyledGamestoreMain = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
	padding-block: 2rem;
	background-color: ${COLORS.black};
	margin-inline: 1.5rem;
	border-radius: 1rem;

	@media screen and (width>=768px) {
		align-items: flex-start;
		padding-inline: 2rem;
	}
`;

const StyledHeader = styled.h2`
	font-size: ${FONT_SIZE.xl};
	font-weight: ${FONT_WEIGHT.bold};
`;

const StyledSearch = styled.div`
	display: flex;
	gap: 1rem;
	justify-content: center;
	align-items: center;
	height: 3.125rem;
	width: 269px;
	border-radius: 1rem;
	background-color: ${COLORS.background};

	@media screen and (width>=768px) {
		width: 100%;
		justify-content: flex-start;
		padding-inline: 2rem;
	}
`;

const StyledTextInput = styled.input`
	background-color: transparent;
	border: none;
	color: ${COLORS.white};
	font-size: ${FONT_SIZE.m};
	font-weight: ${FONT_WEIGHT.bold};
`;

const StyledGamesContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 40px;

	@media screen and (width>=768px) {
		flex-direction: row;
		flex-wrap: wrap;
		gap: 13px;
	}
`;

const StyledFiltersAndGames = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;

	@media screen and (width>=768px) {
		flex-direction: row;
	}
`;

export {
	StyledGamestoreMain,
	StyledHeader,
	StyledSearch,
	StyledTextInput,
	StyledGamesContainer,
	StyledFiltersAndGames
};
