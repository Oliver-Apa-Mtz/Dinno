import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import Button from '../Button';
import Logo from '../../assets/img/logo.png';

const Header = () => {
	const [isHeaderFixed, setIsHeaderFixed] = useState(false);

	const handleScroll = () => {
		const scrollPosition = window.scrollY;
		const headerHeight = 100;
		setIsHeaderFixed(scrollPosition > headerHeight);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className={`header w-screen ${isHeaderFixed ? 'fixed' : ''}`}>
			<div className="header__content">
				<div className='header__logo'>
					<Link to="/">
						<img className='h-[80px]' src={Logo} alt="" />
					</Link>
				</div>
				<div className='header__nav'>
					<Link to="/caracteristicas" className="header__nav__item text-white">Características</Link>
					<Link to="/precios" className="header__nav__item text-white">Precios</Link>
					<Link to="/contacto" className="header__nav__item text-white">Contacto</Link>
					<Link to="/blog" className="header__nav__item text-white">Blog</Link>
				</div>
				<div className='header__buttons'>
					<Button text={'Solícita un Demo'} type={'primary'} action={'contacto'} />
				</div>
			</div>
		</div>
	)
}

export default Header