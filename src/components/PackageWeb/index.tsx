import './packeageWeb.css';
import Chip from '../../components/Chips';
import Button from '../Button';

interface IProps {
	order: number;
	chipText: string;
	title: string;
	description: string;
	action: () => void;
	nameAction: string;
	image: string;
}

const PackageWeb = ({ order, chipText, title, description, action, nameAction, image }: IProps) => {
	return (
		<div className="packageWeb flex">
			<div className={`${order === 1 ? 'order-1 pr-10' : 'order-2 text-right pl-10'}`}>
				<Chip title={chipText} light={true} direction={`${order === 2 ? 'right' : ''}`} />
				<h4 className={`poppins-medium text-principal my-10 text-7xl leading-tight ${order === 1 ? 'pr-5' : 'pl-5'}`}>{title}</h4>
				<p className='be-vietnam-light text text-text mb-10'>{description}</p>
				<Button text={nameAction} type={'primary'} action={() => action()} position={order === 2 ? 'right' : ''} />
			</div>
			<div className={`${order === 1 ? 'order-2 pl-10' : 'order-1 pr-10'}`}>
				<div>
					<img src={image} alt="image" />
				</div>
			</div>
		</div>
	)
}

export default PackageWeb