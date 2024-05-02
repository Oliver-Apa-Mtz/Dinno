import './price.css'
import Chip from "../Chips"
import Button from "../Button"

interface IProps {
	type: string;
	paquete: string;
	price: number;
	features: string[];
}

const Price = ({ type, paquete, price, features }: IProps) => {
	return (
		<div className={`price ${type === 'main' ? 'bg-white' : 'bg-secundario'}`}>
			<Chip title={paquete} light={type === 'main' ? true : false} />
			<h4 className={`poppins-medium title__one--small mt-8 mb-4 ${type === 'main' ? 'text-principal' : 'text-white'}`}>${price}</h4>
			<p className={`be-vietnam-light text mb-8 ${type === 'main' ? 'text-text' : 'text-white'}`}>Que incluye:</p>
			<div className='price__items mb-14'>
				{features.map(item => (
					<p className={`be-vietnam-light text-[16px] mb-5 ${type === 'main' ? 'text-text' : 'text-white'}`}>{item}</p>
				))}
			</div>
			<Button text={'Solícita un Demo'} type={type === 'main' ? 'secondary' : 'third'} action={'contacto'} />
		</div>
	)
}

export default Price