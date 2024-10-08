import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import Button from '../Button';
import Logo from '../../assets/img/logo.webp';
import { RiMenu4Fill } from "react-icons/ri";

const Header = () => {
	const [isHeaderFixed, setIsHeaderFixed] = useState(false);
	const [menuMovil, setMenuMovil] = useState(false);

	const handleScroll = () => {
		const scrollPosition = window.scrollY;
		const headerHeight = 100;
		setIsHeaderFixed(scrollPosition > headerHeight);
	};

	const handleResize = () => {
		const isLargeScreen = window.matchMedia('(min-width: 1024px)').matches;
		if (isLargeScreen) {
			setMenuMovil(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('resize', handleResize);
		};
	}, []);


	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<>
			<div className={`header w-screen ${isHeaderFixed ? 'fixed' : ''} ${menuMovil ? 'header--active' : ''}`}>
				<div className="header__content">
					<div className='header__logo'>
						<Link to="/">
							<img className='h-[80px]' src={Logo} alt="Dinno | Agencia de Desarrollo de Páginas Web y Posicionamiento SEO" loading="lazy" />
						</Link>
					</div>
					<div className='header__nav'>
						<Link to="/servicios" className="header__nav__item text-white min-w-[82px]">Servicios</Link>
						<Link to="/precios" className="header__nav__item text-white min-w-[68px]">Precios</Link>
						<Link to="/nosotros" className="header__nav__item text-white min-w-[100px]">Conócenos</Link>
						<Link to="/contacto" className="header__nav__item text-white min-w-[85px]">Contacto</Link>
					</div>
					<div className='header__buttons'>
						<Button text={'Solícita un Demo'} type={'third'} action={'contacto'} />
					</div>
					<div className='header__menu text-6xl'>
						<RiMenu4Fill className='cursor-pointer' onClick={() => setMenuMovil(!menuMovil)} />
					</div>
				</div>
				{menuMovil && (
					<div className='header__nav__movil bg-white' onClick={() => setMenuMovil(false)}>
						<Link to="/servicios" className="header__nav__item__movil text-secundario text-2xl text-right">Servicios</Link>
						<Link to="/precios" className="header__nav__item__movil text-secundario text-2xl text-right">Precios</Link>
						<Link to="/nosotros" className="header__nav__item__movil text-secundario text-2xl text-right">Conócenos</Link>
						<Link to="/contacto" className="header__nav__item__movil text-secundario text-2xl text-right">Contacto</Link>
					</div>
				)}
			</div>
		</>

	)
}

export default Header