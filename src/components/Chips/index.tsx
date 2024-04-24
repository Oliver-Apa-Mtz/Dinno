import './chips.css';

interface IProps {
	title: string;
	light: boolean;
}
const Chip = ({ title }: IProps) => {
	return (
		<div className='w-max mx-auto chip rounded-full bg-gray px-9 py-2'>
			<p data-text-fill="true" className='be-vietnam-bold'>{title}</p>
		</div>
	)
}

export default Chip