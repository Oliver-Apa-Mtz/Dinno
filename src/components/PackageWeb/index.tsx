import './packeageWeb.css';
import Chip from '../../components/Chips';
import Button from '../Button';
import { FaFireFlameCurved } from "react-icons/fa6";

interface IProps {
	order: number;
	chipText: string;
	title: string;
	description: string;
	action: string;
	nameAction: string;
	image: string;
}

const PackageWeb = ({ order, chipText, title, description, action, nameAction, image }: IProps) => {
	return (
		<div className="packageWeb flex">
			<div className={`relative ${order === 1 ? 'order-1 lg:pr-10' : 'order-2 text-right lg:pl-10'}`}>
				<Chip title={chipText} light={true} direction={`${order === 2 ? 'right' : ''}`} />
				<h4 className={`poppins-medium text-principal my-10 text-7xl leading-tight ${order === 1 ? 'lg:pr-5' : 'lg:pl-5'}`}>{title}</h4>
				<p className='be-vietnam-light text text-text mb-10'>{description}</p>
				<Button text={nameAction} type={'primary'} action={action} position={order === 2 ? 'right' : ''} />
				<div className={`price--oferta text-center flex flex-wrap justify-end w-[40px] text-[#371ae7] -top-3 ${order === 1 ? 'left-[200px]' : 'right-[200px]'}`}>
					<div className='w-full flex justify-center'>
						<FaFireFlameCurved className='text-[2.5rem]' />
					</div>
					<p className='w-full mt-2'>Oferta</p>
				</div>
			</div>
			<div className={`${order === 1 ? 'order-2 lg:pl-10 justify-end' : 'order-1 lg:pr-10'} flex items-center`}>
				<div className='packageWeb__image'>
					<img src={image} alt={title} loading="lazy" />
				</div>
			</div>
		</div>
	)
}

export default PackageWeb