import { StyledCheckbox, StyledCheckboxContainer } from './checkbox.styles';

const Checkbox = ({ text, filterGames, filter }) => {
	return (
		<StyledCheckboxContainer>
			<StyledCheckbox
				type='checkbox'
				id={filter}
				onChange={() => filterGames(filter)}
			/>
			<label htmlFor={filter}>{text}</label>
		</StyledCheckboxContainer>
	);
};

export default Checkbox;
