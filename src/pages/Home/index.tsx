
import './home.css';
import Layout from '../../components/Layout';
import BannerText from '../../components/BannerText';
import Chip from '../../components/Chips';
import PackageWeb from '../../components/PackageWeb';
import FeatureItem from '../../components/Feature';
import BannerCall from '../../components/BannerCall';
import Metrics from '../../components/Metrics';
import SliderTestimonial from '../../components/SliderTestimonial';
import Questions from '../../components/Questions';

import Product1 from '../../assets/img/sitio-1.png';
import Product2 from '../../assets/img/sitio-2.png';
import Product3 from '../../assets/img/sitio-3.png';

import { Textos, TextServices, TextFeature, DataTestimonial, DataQuestions } from '../../utils/textos';

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
						<Chip title={'Paquetes'} light={true} direction={'center'} />
						<BannerText
							title={Textos.about.title}
							text={Textos.about.text}
							buttonsDemo={false}
							size={'large'}
						/>
						<PackageWeb
							order={1}
							chipText='Básico'
							title={TextServices.basic.title}
							description={TextServices.basic.text}
							nameAction='Solícita un Demo'
							action={'contacto'}
							image={Product1}
						/>
						<PackageWeb
							order={2}
							chipText='Empresarial'
							title={TextServices.enterprise.title}
							description={TextServices.enterprise.text}
							nameAction='Solícita un Demo'
							action={'contacto'}
							image={Product2}
						/>
						<PackageWeb
							order={1}
							chipText='Personalizado'
							title={TextServices.premium.title}
							description={TextServices.premium.text}
							nameAction='Solícita un Demo'
							action={'contacto'}
							image={Product3}
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

					<div>
						<div>
							<Chip title={'¿Dudas?'} light={true} direction={'center'} />
							<h2 className={`banner-principal__text--primary poppins-medium text-principal title__one--small text-center`}>
								Preguntas frecuentes
							</h2>
							<Questions data={DataQuestions} />
						</div>
						<div>
							<BannerCall />
						</div>
					</div>
				</div>
			}
		</Layout>
	)
}

export default Home