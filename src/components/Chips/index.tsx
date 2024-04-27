import './chips.css';

interface IProps {
	title: string;
	light: boolean;
	direction?: string;
}
const Chip = ({ title, direction, light }: IProps) => {
	return (
		<div className={`flex items-center ${direction === 'center' ? 'justify-center' : direction === 'right' ? 'justify-end' : 'justify-start'}`}>
			<div className={`w-max chip rounded-full bg-gray px-9 py-2 ${light ? 'bg-gray' : 'bg-white'}`}>
				<p data-text-fill="true" className='be-vietnam-bold'>{title}</p>
			</div>
		</div>
	)
}

export default Chip