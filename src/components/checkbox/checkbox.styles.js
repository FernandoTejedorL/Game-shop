import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

const StyledCheckboxContainer = styled.div`
	display: flex;
	gap: 0.625rem;
`;

const StyledCheckbox = styled.input`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	accent-color: ${COLORS.blue};
	width: 1.5rem;
	height: 1.5rem;
	border: 0.0625rem solid ${COLORS.pink};
	border-radius: 0.25rem;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;

	&:checked {
		background-color: ${COLORS.blue};
		border: none;
	}

	&:checked::after {
		content: '※';
		position: absolute;
		top: 0;
		color: ${COLORS.white};
	}
`;

export { StyledCheckboxContainer, StyledCheckbox };
