import './button.css';

interface IProps {
	text: string;
	type: string;
	action: () => void;
	position?: string;
}
const Button = ({ text, type, action, position = 'center' }: IProps) => {
	return (
		<div className={`flex items-center ${position === 'center' ? 'justify-center' : position === 'right' ? 'justify-end' : 'justify-start'}`}>
			<div className={`button button--${type}`} onClick={() => action()}>
				<div>
					{text}
				</div>
			</div>
		</div>
	)
}

export default Button