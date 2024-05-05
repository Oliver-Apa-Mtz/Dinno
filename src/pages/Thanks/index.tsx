import '../Home/home.css';
import Layout from '../../components/Layout';
import Button from '../../components/Button';

const ThankYou = () => {

	return (
		<Layout>
			{
				<div>
					<div className='banner-principal flex items-center' style={{ height: '100vh' }}>
						<div className='efect__one'>
							<div className='efect__one--1'></div>
							<div className='efect__one--2'></div>
						</div>
						<div className='efect__two'>
							<div className='efect__two--1'></div>
							<div className='efect__two--2'></div>
						</div>
						<div className='banner-principal__text'>
							<h1 className='banner-principal__text--primary poppins-medium title__one title__one--big text-principal'>
								Gracias
							</h1>
							<h2 className='banner-principal__text--primary poppins-medium text-principal title__one--small'>
								por ponerte en contacto
							</h2>
							<p className='banner-principal__text--secondary be-vietnam-light text text-text banner-principal__text--large'>
								¡Gracias por contactarnos! Nos pondremos en contacto contigo lo antes posible para discutir tu consulta. ¡Estamos emocionados de trabajar contigo y ayudarte a alcanzar tus objetivos en línea!
							</p>
							<div className='banner-principal__buttons'>
								<Button text={'Volver al inicio'} type={'primary'} action={'inicio'} />
							</div>
						</div>
					</div>
				</div>
			}
		</Layout>

	)
}

export default ThankYou