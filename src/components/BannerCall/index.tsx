import './bannerCall.css'
import Button from '../Button';

interface IProps {
	secondary?: boolean;
}

const BannerCall = ({ secondary }: IProps) => {
	const titleOne = '¡Potencia tu presencia en línea con Dinno!';
	const titleTwo = '¡Impulsa tu éxito en la web con Dinno!';
	const textOne = 'Destaca entre la competencia y llega a más clientes con nuestros servicios de desarrollo web. Diseños atractivos, funcionalidades avanzadas y soporte experto: ¡haz que tu sitio web sea inolvidable con Dinno!';
	const textTwo = 'Atrae a más clientes y destaca en la web con nuestro servicio de desarrollo web. diseños atractivos, funcionalidades avanzadas y soporte profesional: ¡Haz que tu sitio web sea inolvidable con Dinno!';
	return (
		<div>
			<div className={`banner-call flex ${secondary ? 'banner-call--secondary' : ''}`}>
				<div className='banner-call__text p-4'>
					<h3 className='poppins-medium text-principal text-white title__one--small mb-8'>{secondary ? titleTwo : titleOne}</h3>
					<p className='be-vietnam-light text text-white'>{secondary ? textTwo : textOne}</p>
				</div>
				<div className='banner-call__button flex items-center justify-center p-4'>
					<Button text={'Solícita un Demo'} type={'third'} action={'contacto'} />
				</div>
			</div>
		</div>
	)
}

export default BannerCall