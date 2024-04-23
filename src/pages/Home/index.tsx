
import './home.css';
import Layout from '../../components/Layout';
import Button from '../../components/Button';

const Home = () => {

	return (
		<Layout>
			{
				<div>
					<div className='banner-principal bg-gray'>
						<div className='efect__one'>
							<div className='efect__one--1'></div>
							<div className='efect__one--2'></div>
						</div>
						<div className='efect__two'>
							<div className='efect__two--1'></div>
							<div className='efect__two--2'></div>
						</div>
						<div className='banner-principal__text'>
							<h2 className='poppins-medium text text-principal'>
								Transformamos tu presencia digital en una poderosa <br></br>herramienta de crecimiento
							</h2>
							<h1 className='banner-principal__text--primary poppins-medium title__one text-principal'>
								Sé visible. <br></br>Crece online con DINNO.
							</h1>
							<p className='banner-principal__text--secondary be-vietnam-regular text text-text'>
								Bienvenido a DINNO, donde convertimos tus sueños en realidad digital.
								Nos especializamos en el diseño y desarrollo de páginas web que no
								solo impresionan, sino que también impulsan tu negocio hacia el éxito.
								¿Listo para dar el siguiente paso?
							</p>
							<div className='banner-principal__buttons'>
								<Button text={'Conócenos'} type={'primary'} />
								<Button text={'Solícita un Demo'} type={'secondary'} />
							</div>
						</div>
					</div>
				</div>
			}
		</Layout>
	)
}

export default Home