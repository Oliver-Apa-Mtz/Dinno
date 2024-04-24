
import './home.css';
import Layout from '../../components/Layout';
import BannerText from '../../components/BannerText';
import SliderMarcas from '../../components/SliderMarcas';
import Chip from '../../components/Chips';

import Slider1 from '../../assets/img/google.png';
import Slider2 from '../../assets/img/social.png';

const Textos = {
	main: {
		title: 'Sé visible. Crece online con DINNO.',
		subtitle: 'Transformamos tu presencia digital en una poderosa herramienta de crecimiento',
		text: 'Bienvenido a DINNO, donde convertimos tus sueños en realidad digital. Nos especializamos en el diseño y desarrollo de páginas web que no solo impresionan, sino que también impulsan tu negocio hacia el éxito. ¿Listo para dar el siguiente paso ? '
	},
	about: {
		title: 'Servicios de Desarrollo Web',
		text: 'Nuestros servicios de desarrollo web están diseñados para adaptarse a tus necesidades únicas. Desde el diseño de sitios web atractivos hasta la optimización para SEO, en DINNO tenemos lo que necesitas para triunfar en línea.'
	}
}

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
						<Chip title={'Paquetes'} light={true} />
						<BannerText
							title={Textos.about.title}
							text={Textos.about.text}
							buttonsDemo={false}
							size={'large'}
						/>
					</div>
				</div>
			}
		</Layout>
	)
}

export default Home