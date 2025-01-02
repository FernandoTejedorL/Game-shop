import { StyledButton } from './button.styles';

const Button = ({ color, children }) => {
	console.log(color);
	return <StyledButton color={color}>{children}</StyledButton>;
};

export default Button;
