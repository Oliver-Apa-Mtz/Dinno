import '../Home/home.css';
import Layout from '../../components/Layout';

const Privacy = () => {

	return (
		<Layout>
			{
				<div>
					<div className='banner-principal banner-principal--custom flex items-center'>
						<div className='efect__one'>
							<div className='efect__one--1'></div>
							<div className='efect__one--2'></div>
						</div>
						<div className='efect__two'>
							<div className='efect__two--1'></div>
							<div className='efect__two--2'></div>
						</div>
						<div className='banner-principal__text' style={{ textAlign: 'left' }}>
							<h1 className='banner-principal__text--primary poppins-medium title__one title__one--small text-principal text-center' style={{ margin: '20px auto 50px' }}>
								Aviso de Privacidad
							</h1>
							<p className='banner-principal__text--secondary be-vietnam-light text text-text banner-principal__text--large'>
								En Dinno, valoramos y respetamos tu privacidad. Este aviso de privacidad describe cómo recopilamos,
								utilizamos y protegemos la información personal que nos proporcionas cuando visitas nuestro sitio
								web o utilizas nuestros servicios. Al utilizar nuestro sitio web o servicios, aceptas los términos
								y condiciones descritos en este aviso de privacidad.
							</p>
							<p className='banner-principal__text--secondary be-vietnam-light text text-text banner-principal__text--large'>
								Recopilación de información: Recopilamos información personal, como nombre, dirección de correo
								electrónico y número de teléfono, cuando nos la proporcionas voluntariamente al utilizar nuestros
								formularios de contacto o al contratar nuestros servicios.
							</p>
							<p className='banner-principal__text--secondary be-vietnam-light text text-text banner-principal__text--large'>
								Uso de la información: Utilizamos la información personal recopilada para responder a tus consultas,
								proporcionarte los servicios solicitados, mejorar nuestros servicios y enviarte comunicaciones
								relacionadas con tu interacción con nosotros.
							</p>
							<p className='banner-principal__text--secondary be-vietnam-light text text-text banner-principal__text--large'>
								Protección de la información: Tomamos medidas de seguridad adecuadas para proteger tu información
								personal contra accesos no autorizados, divulgación o alteración.
							</p>
							<p className='banner-principal__text--secondary be-vietnam-light text text-text banner-principal__text--large'>
								Divulgación de la información: No compartiremos tu información personal con terceros, excepto
								cuando sea necesario para cumplir con los propósitos descritos en este aviso de privacidad.
							</p>
							<h2 className='banner-principal__text--primary poppins-medium title__one title__one--small text-principal text-center' style={{ margin: '100px auto 50px' }}>
								Términos y Condiciones
							</h2>
							<p className='banner-principal__text--secondary be-vietnam-light text text-text banner-principal__text--large'>
								Al utilizar los servicios de Dinno, aceptas los siguientes términos y condiciones:
							</p>
							<p className='banner-principal__text--secondary be-vietnam-light text text-text banner-principal__text--large'>
								Servicios ofrecidos: Dinno ofrece servicios de desarrollo web, diseño gráfico y consultoría en marketing digital.
							</p>
							<p className='banner-principal__text--secondary be-vietnam-light text text-text banner-principal__text--large'>
								Responsabilidad del usuario: El usuario es responsable de proporcionar información precisa y completa al utilizar
								nuestros servicios. El usuario también es responsable de cumplir con las leyes y regulaciones aplicables.
							</p>
							<p className='banner-principal__text--secondary be-vietnam-light text text-text banner-principal__text--large'>
								Propiedad intelectual: Todos los derechos de propiedad intelectual relacionados con los servicios de Dinno, incluidos
								el diseño web, el contenido y la marca, son propiedad de Dinno y sus integrantes.
							</p>
							<p className='banner-principal__text--secondary be-vietnam-light text text-text banner-principal__text--large'>
								Limitación de responsabilidad: Ni Dinno ni sus integrantes serán responsables de ningún daño directo, indirecto,
								incidental, especial o consecuente que surja del uso o la imposibilidad de utilizar nuestros servicios.
							</p>
							<p className='banner-principal__text--secondary be-vietnam-light text text-text banner-principal__text--large'>
								Cambios en los términos: Dinno se reserva el derecho de modificar estos términos y condiciones en cualquier momento.
								Los cambios entrarán en vigencia al ser publicados en nuestro sitio web.
							</p>
							<p className='banner-principal__text--secondary be-vietnam-light text text-text banner-principal__text--large'>
								Al utilizar nuestros servicios, aceptas estos términos y condiciones. Si no estás de acuerdo con estos términos,
								por favor abstente de utilizar nuestros servicios.
							</p>
						</div>
					</div>
				</div>
			}
		</Layout>
	)
}

export default Privacy