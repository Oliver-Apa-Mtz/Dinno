import './header.css';
import Button from '../Button';

const Header = () => {
	return (
		<div className='header w-screen'>
			<div className="header__content">
				<div className='header__logo'>
					<p className='poppins-bold text-principal'>DINNO</p>
				</div>
				<div className='header__nav'>
					<div className="header__nav__item text-white">Características</div>
					<div className="header__nav__item text-white">Precios</div>
					<div className="header__nav__item text-white">Contacto</div>
					<div className="header__nav__item text-white">Blog</div>
				</div>
				<div className='header__buttons'>
					<Button text={'Solícita un Demo'} type={'primary'} action={() => { }} />
				</div>
			</div>
		</div>
	)
}

export default Header