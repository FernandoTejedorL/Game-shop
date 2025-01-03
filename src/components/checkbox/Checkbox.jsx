import { StyledCheckbox, StyledCheckboxContainer } from './checkbox.styles';

const Checkbox = ({ plattform }) => {
	return (
		<StyledCheckboxContainer>
			<StyledCheckbox type='checkbox' id={plattform} />
			<label htmlFor={plattform}>{plattform}</label>
		</StyledCheckboxContainer>
	);
};

export default Checkbox;
