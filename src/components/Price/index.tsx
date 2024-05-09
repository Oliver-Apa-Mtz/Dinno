import './price.css'
import Chip from "../Chips"
import Button from "../Button"
import { FaFireFlameCurved } from "react-icons/fa6";

interface IProps {
	type: string;
	paquete: string;
	price: number;
	features: string[];
	limit?: boolean;
}

const Price = ({ type, paquete, price, features, limit }: IProps) => {
	return (
		<div className={`price ${type === 'main' ? 'bg-white' : 'bg-secundario'}`}>
			<Chip title={paquete} light={type === 'main' ? true : false} />
			<div className="flex items-end">
				{limit && <span className={`text-principal mr-2 text-[14px] pb-8 ${type === 'main' ? 'text-principal' : 'text-white'}`}>Hasta</span>}
				<h4 className={`poppins-medium title__one--small mt-8 mb-6 ${type === 'main' ? 'text-principal' : 'text-white'}`}>${price}</h4>
			</div>
			<p className={`be-vietnam-light text mb-8 ${type === 'main' ? 'text-text' : 'text-white'}`}>Que incluye:</p>
			<div className='price__items mb-14'>
				{features.map((item, index) => (
					<p className={`be-vietnam-light text-[16px] mb-5 ${type === 'main' ? 'text-text' : 'text-white'}`} key={'item-price' + index}>{item}</p>
				))}
			</div>
			<Button text={'Solícita un Demo'} type={type === 'main' ? 'secondary' : 'third'} action={'contacto'} />
			<div className={`price--oferta text-center flex flex-wrap justify-end w-[40px] top-5 right-5 ${type === 'main' ? 'text-[#371ae7]' : 'text-white'}`}>
				<div className='w-full flex justify-center'>
					<FaFireFlameCurved className='text-[2.5rem]' />
				</div>
				<p className='w-full mt-2'>Oferta</p>
			</div>
		</div>
	)
}

export default Price