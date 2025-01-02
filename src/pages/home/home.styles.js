import styled from 'styled-components';
import { COLORS } from '../../styles/colors';
import { FONT_SIZE, FONT_WEIGHT, LINE_HEIGHT } from '../../styles/fonts';
import { Link } from 'react-router-dom';

const StyledMain = styled.main`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	align-items: center;
	background-color: ${COLORS.black};
	color: ${COLORS.white};
	border-radius: 1rem;
	padding-block: 2rem;
	margin: 1.5rem;
`;

const StyledHeader = styled.h1`
	font-size: ${FONT_SIZE.xl};
`;

const StyledTextBox = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	font-size: ${FONT_SIZE.m};
	line-height: ${LINE_HEIGHT.high};
	margin-inline: 1.3125rem;
`;

const StyledUl = styled.ul`
	list-style: circle;
`;

const StyledToGameStore = styled(Link)`
	width: 12.5rem;
	height: 3.125rem;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: ${FONT_SIZE.m};
	font-weight: ${FONT_WEIGHT.bold};
	background-color: ${COLORS.blue};
	border-radius: 1rem;
`;

export { StyledMain, StyledHeader, StyledTextBox, StyledUl, StyledToGameStore };
