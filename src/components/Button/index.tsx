import { Link } from 'react-router-dom';
import './button.css';

interface IProps {
	text: string;
	type: string;
	action: string;
	position?: string;
}
const Button = ({ text, type, action, position = 'center' }: IProps) => {
	return (
		<div className={`flex items-center ${position === 'center' ? 'justify-center' : position === 'right' ? 'justify-end' : 'justify-start'}`}>
			<div className={`button button--${type}`}>
				<div>
					<Link to={'/' + action}>{text}</Link>
				</div>
			</div>
		</div>
	)
}

export default Button