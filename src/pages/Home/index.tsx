
import './home.css';
import Layout from '../../components/Layout';
import BannerText from '../../components/BannerText';
import SliderMarcas from '../../components/SliderMarcas';
import Chip from '../../components/Chips';
import PackageWeb from '../../components/PackageWeb';
import FeatureItem from '../../components/Feature';
import BannerCall from '../../components/BannerCall';
import Metrics from '../../components/Metrics';
import SliderTestimonial from '../../components/SliderTestimonial';

import Slider1 from '../../assets/img/google.png';
import Slider2 from '../../assets/img/social.png';

import Product1 from '../../assets/img/example.webp';

const Textos = {
	main: {
		title: 'Sé visible, crece online con DINNO.',
		subtitle: 'Transformamos tu presencia digital en una poderosa herramienta de crecimiento',
		text: 'Bienvenido a DINNO, donde convertimos tus sueños en realidad digital. Nos especializamos en el diseño y desarrollo de páginas web que no solo impresionan, sino que también impulsan tu negocio hacia el éxito. ¿Listo para dar el siguiente paso ? '
	},
	about: {
		title: 'Servicios de desarrollo web',
		text: 'Nuestros servicios de desarrollo web están diseñados para adaptarse a tus necesidades únicas. Desde el diseño de sitios web atractivos hasta la optimización para SEO, en DINNO tenemos lo que necesitas para triunfar en línea.'
	},
	feature: {
		title: 'Maximiza tu presencia online con DINNO',
		text: 'Descubre los beneficios de trabajar con DINNO. Aumenta tu visibilidad, mejora la experiencia del usuario y protege tus datos. Con nosotros, convierte visitantes en clientes satisfechos y asegura un crecimiento continuo para tu negocio en línea.'
	}
}

const TextServices = {
	basic: {
		title: 'Presencia web inicial',
		text: 'Tu primer paso hacia el éxito online. Obtén una presencia sólida y profesional en la web para conectar con tu audiencia y expandir tu alcance. Perfecto para quienes dan sus primeros pasos en el mundo digital.'
	},
	enterprise: {
		title: 'Maximiza tu impacto en línea',
		text: 'Lleva tu negocio al siguiente nivel con nuestro Paquete Empresarial. Ofrece funcionalidades avanzadas, diseño personalizado y estrategias de marketing integradas para destacar en línea y atraer a más clientes.'
	},
	premium: {
		title: 'Tu visión, nuestra creación',
		text: 'Transforma tu visión en realidad con nuestro Paquete Personalizado. Trabajamos contigo para crear una solución web adaptada a tu marca y audiencia. Características avanzadas y diseño a medida para una presencia en línea inolvidable.'
	},
}

const TextFeature = [
	{
		title: 'Aumenta tu presencia online',
		text: 'Destaca entre la competencia y llega a más clientes potenciales en línea. Aumenta tu visibilidad y fortalece tu marca en el mundo digital.',
		image: ''
	},
	{
		title: 'Convierte visitantes en clientes satisfechos',
		text: 'Diseñamos sitios web que convierten. Aumenta tus ventas y maximiza el retorno de tu inversión en línea.',
		image: ''
	},
	{
		title: 'Navegación intuitiva, experiencia inolvidable',
		text: 'Ofrece a tus clientes una experiencia de navegación fluida y sin problemas. Cada visita será una experiencia memorable.',
		image: ''
	},
	{
		title: 'Seguridad sin compromisos, protegiendo tu negocio',
		text: 'Protege tus datos y la información de tus clientes con nuestras medidas de seguridad de vanguardia. Obtén confianza y tranquilidad en cada interacción en línea.',
		image: ''
	},
	{
		title: 'Asistencia permanente, tu éxito es nuestro compromiso',
		text: 'Nunca estás solo. Ofrecemos soporte continuo para que tu sitio web funcione sin problemas en todo momento. Nos comprometemos a ayudarte a alcanzar tus objetivos en línea.',
		image: ''
	},
]

const DataSlider = [
	{
		id: 1,
		image: Slider1,
	},
	{
		id: 2,
		image: Slider2,
	},
	{
		id: 3,
		image: Slider1,
	},
	{
		id: 4,
		image: Slider2,
	},
	{
		id: 5,
		image: Slider1,
	},
	{
		id: 6,
		image: Slider2,
	},
]

const DataTestimonial = [
	{
		id: 1,
		name: 'María Fernández, Propietaria de una Tienda Online',
		text: '¡Increíble trabajo! DINNO transformó por completo nuestra presencia en línea. ¡Altamente recomendado!',
		image: '',
		color: '#ECE5FF',
	},
	{
		id: 2,
		name: 'Carlos González, Director de Marketing',
		text: '¡Equipo excepcional! Gracias a DINNO, nuestra web ahora genera más leads que nunca. ¡Bravo!',
		image: '',
		color: '#FBF7B8',
	},
	{
		id: 3,
		name: 'Laura Martínez, Fundadora de una Startup Tecnológica',
		text: 'DINNO es simplemente asombroso. Su enfoque centrado en el cliente y su creatividad nos dejaron boquiabiertos. ¡Gracias por todo!',
		image: '',
		color: '#D9FFD8',
	}
]

const Home = () => {

	return (
		<Layout>
			{
				<div>
					<div className='banner-principal banner-principal--custom bg-gray'>
						<div className='efect__one'>
							<div className='efect__one--1'></div>
							<div className='efect__one--2'></div>
						</div>
						<div className='efect__two'>
							<div className='efect__two--1'></div>
							<div className='efect__two--2'></div>
						</div>
						<BannerText
							subtitle={Textos.main.subtitle}
							title={Textos.main.title}
							text={Textos.main.text}
							buttonsDemo={true}
						/>
					</div>

					<div className='banner-principal'>
						<div>
							<SliderMarcas title={'Siempre a la vanguardia'} data={DataSlider} />
						</div>
						<Chip title={'Paquetes'} light={true} direction={'center'} />
						<BannerText
							title={Textos.about.title}
							text={Textos.about.text}
							buttonsDemo={false}
							size={'large'}
						/>
						<PackageWeb
							order={1}
							chipText='Basico'
							title={TextServices.basic.title}
							description={TextServices.basic.text}
							nameAction='Solícita un Demo'
							action={() => { }}
							image={Product1}
						/>
						<PackageWeb
							order={2}
							chipText='Empresarial'
							title={TextServices.enterprise.title}
							description={TextServices.enterprise.text}
							nameAction='Solícita un Demo'
							action={() => { }}
							image={Product1}
						/>
						<PackageWeb
							order={1}
							chipText='Personalizado'
							title={TextServices.premium.title}
							description={TextServices.premium.text}
							nameAction='Solícita un Demo'
							action={() => { }}
							image={Product1}
						/>
					</div>

					<div className='banner-principal'>
						<div>
							<Chip title={'Beneficios'} light={true} direction={'center'} />
							<BannerText
								title={Textos.feature.title}
								text={Textos.feature.text}
								buttonsDemo={false}
								size={'large'}
							/>
						</div>
						<div className='banner-features flex flex-wrap justify-center gap-4'>
							{TextFeature.map((item, index) => {
								return (
									<FeatureItem
										key={index}
										title={item.title}
										description={item.text}
										image={item.image}
									/>
								)
							})}
						</div>

						<div>
							<BannerCall />
						</div>
					</div>

					<div className='banner-principal'>
						<div>
							<Chip title={'Números'} light={true} direction={'center'} />
							<Metrics />
						</div>
					</div>

					<div className='banner-principal banner-testimonial'>
						<div>
							<Chip title={'Testimonios'} light={false} direction={'center'} />
							<h2 className={`banner-principal__text--primary poppins-medium text-principal title__one--small text-center`}>
								Nuestros clientes
							</h2>
							<SliderTestimonial data={DataTestimonial} />
						</div>
					</div>
				</div>
			}
		</Layout>
	)
}

export default Home