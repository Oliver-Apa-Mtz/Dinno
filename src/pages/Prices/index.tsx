
import '../Home/home.css';
import Layout from '../../components/Layout';
import BannerText from '../../components/BannerText';
import Chip from '../../components/Chips';
import BannerCall from '../../components/BannerCall';
import SliderTestimonial from '../../components/SliderTestimonial';
import Questions from '../../components/Questions';
import Price from '../../components/Price';

import { Textos, DataQuestions, DataTestimonial, DataPrices } from '../../utils/textos';


const Prices = () => {

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
							title={Textos.prices.title}
							text={Textos.prices.text}
							buttonsDemo={false}
						/>
						<div className='container-prices'>
							{DataPrices.map((price: any) => (
								<Price type={price.type} paquete={price.package} price={price.price} features={price.items} />
							))}
						</div>
					</div>

					<div>
						<div className='banner-principal'>
							<Chip title={'¿Dudas?'} light={true} direction={'center'} />
							<h2 className={`banner-principal__text--primary poppins-medium text-principal title__one--small text-center`}>
								Preguntas frecuentes
							</h2>
							<Questions data={DataQuestions} />
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
							<BannerCall />
						</div>
					</div>
				</div>
			}
		</Layout>
	)
}

export default Prices