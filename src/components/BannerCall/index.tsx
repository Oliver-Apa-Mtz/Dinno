import './banner-call.css'
import Button from '../Button';

const BannerCall = () => {
	return (
		<div>
			<div className='banner-call flex'>
				<div className='banner-call__text p-4'>
					<h3 className='poppins-medium text-principal text-white title__one--small mb-8'>¡Potencia tu presencia en línea con DINNO!</h3>
					<p className='be-vietnam-light text text-white'>Destaca entre la competencia y llega a más clientes con nuestros servicios de desarrollo web. Diseños atractivos, funcionalidades avanzadas y soporte experto: ¡haz que tu sitio web sea inolvidable con DINNO!</p>
				</div>
				<div className='banner-call__button flex items-center justify-center p-4'>
					<Button text={'Solícita un Demo'} type={'primary'} action={() => { }} />
				</div>
			</div>
		</div>
	)
}

export default BannerCall