import styled from 'styled-components';

const StyledButton = styled.button`
	background-color: ${({ color }) => color};
	color: white;
	border: none;
	padding: 0.5rem;

	@media screen and (width>768px) {
		display: block;
	}

	@media (hover: hover) {
		&:hover {
			scale: 0.8;
		}
	}
`;

export { StyledButton };
