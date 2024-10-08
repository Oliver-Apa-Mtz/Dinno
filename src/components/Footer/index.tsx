import { Link } from 'react-router-dom';
import './footer.css'
import Logo from '../../assets/img/logo-footer.webp';
import { FaSquareFacebook, FaInstagram } from "react-icons/fa6";
const Footer = () => {
	return (
		<div className='footer'>
			<div className='lg:flex justify-between'>
				<div className='footer__logo'>
					<Link to="/">
						<img className='w-[300px]' src={Logo} alt="Dinno | Agencia de Desarrollo de Páginas Web y Posicionamiento SEO" loading="lazy" />
					</Link>
				</div>
				<div className='footer__nav'>
					<Link to="/servicios" className="block poppins-medium text-principal text-6xl mb-6 cursor-pointer hover:text-secundario">Servicios</Link>
					<Link to="/precios" className="block poppins-medium text-principal text-6xl mb-6 cursor-pointer hover:text-secundario">Precios</Link>
					<Link to="/contacto" className="block poppins-medium text-principal text-6xl mb-6 cursor-pointer hover:text-secundario">Contacto</Link>
					<Link to="/blog" className="block poppins-medium text-principal text-6xl mb-6 cursor-pointer hover:text-secundario">Blog</Link>
				</div>
				<div className='footer__company'>
					<Link to="/nosotros" className="block be-vietnam-semibold text-3xl mb-4 text-principal cursor-pointer hover:text-secundario">Nosotros</Link>
					<Link to="/nosotros" className="block be-vietnam-semibold text-text text-3xl mb-4 cursor-pointer hover:text-secundario">Historia</Link>
					<div className='footer__social flex gap-4 mt-10'>
						<a className='text-principal hover:text-secundario text-6xl' href="https://www.facebook.com/AgenciaDinno" target='blank' aria-label="Facebook de Dinno">
							<FaSquareFacebook />
						</a>
						<a className='text-principal hover:text-secundario text-6xl' href="https://www.instagram.com/agenciadinno/" target='blank' aria-label="Instagram de Dinno">
							<FaInstagram />
						</a>
					</div>
				</div>
			</div>
			<div className='lg:flex lg:justify-between mt-24 text-center'>
				<div>
					<p className="be-vietnam-light text-2xl text-text mb-4 lg:mb-0">Dinno • Copyright © 2024</p>
				</div>
				<div>
					<Link to="/aviso-de-privacidad" className="be-vietnam-light text-2xl text-text">Términos y condiciones</Link>
				</div>
			</div>
		</div>
	)
}

export default Footer