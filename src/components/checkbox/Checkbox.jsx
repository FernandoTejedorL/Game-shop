import { StyledCheckbox, StyledCheckboxContainer } from './checkbox.styles';

const Checkbox = ({ plattform, action }) => {
	return (
		<StyledCheckboxContainer>
			<StyledCheckbox
				type='checkbox'
				id={plattform}
				onChange={() => action()}
			/>
			<label htmlFor={plattform}>{plattform}</label>
		</StyledCheckboxContainer>
	);
};

export default Checkbox;
