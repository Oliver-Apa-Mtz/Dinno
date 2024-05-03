import { Link } from 'react-router-dom';
import './button.css';

interface IProps {
	text: string;
	type: string;
	action: string;
	position?: string;
	large?: boolean;
}
const Button = ({ text, type, action, large, position = 'center' }: IProps) => {
	return (
		<div className={`flex items-center ${position === 'center' ? 'justify-center' : position === 'right' ? 'justify-end' : 'justify-start'}`}>
			<Link to={'/' + action}>
				<div className={`button button--${type} ${large ? 'button--large' : ''}`}>
					<div>
						{text}
					</div>
				</div>
			</Link>
		</div>
	)
}

export default Button