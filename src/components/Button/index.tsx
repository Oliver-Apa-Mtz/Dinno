import './button.css';

interface IProps {
	text: string;
	type: string;
}
const Button = ({ text, type }: IProps) => {
	return (
		<div className={`button button--${type}`}>
			<div>
				{text}
			</div>
		</div>
	)
}

export default Button