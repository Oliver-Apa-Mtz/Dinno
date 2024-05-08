import { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';

import '../Home/home.css';
import Layout from '../../components/Layout';
import BannerText from '../../components/BannerText';
import Chip from '../../components/Chips';
import BannerCall from '../../components/BannerCall';
import SliderTestimonial from '../../components/SliderTestimonial';
import Questions from '../../components/Questions';
import Price from '../../components/Price';

import { Textos, DataQuestions, DataTestimonial, DataPrices, PriceHelp } from '../../utils/textos';


const Prices = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [isVisibleBanner2, setIsVisibleBanner2] = useState(false);
	const isMobile = window.innerWidth <= 1023;

	const animationPropsBanner1 = useSpring({
		opacity: isVisible ? 1 : 0,
	});
	const animationPropsBanner2 = useSpring({
		opacity: isVisibleBanner2 ? 1 : 0,
		transform: isVisibleBanner2 ? 'translateY(0)' : 'translateY(50px)',
	});

	useEffect(() => {
		setIsVisible(true);
		setIsVisibleBanner2(true);
	}, []);

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
						<animated.div style={!isMobile ? animationPropsBanner1 : {}} className="animated-element">
							<BannerText
								title={Textos.prices.title}
								text={Textos.prices.text}
								buttonsDemo={false}
							/>
						</animated.div>

						<animated.div style={!isMobile ? animationPropsBanner2 : {}} className="animated-element">
							<div className='container-prices'>
								{DataPrices.map((price: any, index: number) => (
									<Price type={price.type} paquete={price.package} price={price.price} features={price.items} limit={price.limit} key={'price' + index} />
								))}
							</div>
						</animated.div>
					</div>

					<div className='banner-principal mb-20'>
						<BannerText
							title={PriceHelp.title}
							text={PriceHelp.text}
							buttonsDemo={false}
							size={'large'}
							contactButton={true}
						/>
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
							<BannerCall secondary={true} />
						</div>
					</div>
				</div>
			}
		</Layout>
	)
}

export default Prices