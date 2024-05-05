import './chips.css';

interface IProps {
	title: string;
	light: boolean;
	direction?: string;
}
const Chip = ({ title, direction, light }: IProps) => {
	return (
		<div className={`chip__container flex items-center ${direction === 'center' ? 'justify-center' : direction === 'right' ? 'lg:justify-end justify-center' : 'lg:justify-start justify-center'}`}>
			<div className={`w-max chip rounded-full bg-gray px-10 py-2 ${light ? 'bg-gray' : 'bg-white'}`}>
				<p data-text-fill="true" className='be-vietnam-bold'>{title}</p>
			</div>
		</div>
	)
}

export default Chip