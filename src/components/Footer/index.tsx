import { Link } from 'react-router-dom';
import './footer.css'
import Logo from '../../assets/img/logo-footer.png';
const Footer = () => {
	return (
		<div className='footer'>
			<div className='flex justify-between'>
				<div className='footer__logo'>
					<img className='w-[300px]' src={Logo} alt="" />
				</div>
				<div className='footer__nav'>
					<Link to="/caracteristicas" className="block poppins-medium text-principal text-6xl mb-6 cursor-pointer hover:text-secundario">Características</Link>
					<Link to="/precios" className="block poppins-medium text-principal text-6xl mb-6 cursor-pointer hover:text-secundario">Precios</Link>
					<Link to="/contacto" className="block poppins-medium text-principal text-6xl mb-6 cursor-pointer hover:text-secundario">Contacto</Link>
					<Link to="/blog" className="block poppins-medium text-principal text-6xl mb-6 cursor-pointer hover:text-secundario">Blog</Link>
				</div>
				<div className='footer__company'>
					<div className="be-vietnam-semibold text-3xl mb-4 text-principal cursor-pointer hover:text-secundario">Cultura</div>
					<div className="be-vietnam-semibold text-text text-3xl mb-4 cursor-pointer hover:text-secundario">Historia</div>
					<div className="be-vietnam-semibold text-text text-3xl mb-4 cursor-pointer hover:text-secundario">Equipo</div>
				</div>
			</div>
			<div className='flex justify-between mt-24'>
				<div>
					<p className="be-vietnam-light text-2xl text-text">DINNO • Copyright © 2024</p>
				</div>
				<div>
					<p className="be-vietnam-light text-2xl text-text">Términos y condiciones</p>
				</div>
			</div>
		</div>
	)
}

export default Footer