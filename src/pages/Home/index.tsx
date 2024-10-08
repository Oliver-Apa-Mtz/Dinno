import { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';

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

import Product1 from '../../assets/img/sitio-1.webp';
import Product2 from '../../assets/img/sitio-2.webp';
import Product3 from '../../assets/img/sitio-3.webp';
import { HiSparkles, HiCursorArrowRays, HiRocketLaunch, HiMiniHeart } from "react-icons/hi2";

import { Textos, TextServices, TextFeature, DataTestimonial, DataQuestions } from '../../utils/textos';

const Home = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [isVisibleBanner2, setIsVisibleBanner2] = useState(false);
	const [isVisibleBanner3, setIsVisibleBanner3] = useState(false);
	const [isVisibleBanner4, setIsVisibleBanner4] = useState(false);
	const [isVisibleBanner5, setIsVisibleBanner5] = useState(false);
	const isMobile = window.innerWidth <= 1023;

	const handleScroll = () => {
		const scrollPosition = window.scrollY;
		const headerHeight = 500;
		setIsVisibleBanner2(scrollPosition > headerHeight);
		setIsVisibleBanner3(scrollPosition > (headerHeight + 550));
		setIsVisibleBanner4(scrollPosition > (headerHeight + 1050));
		setIsVisibleBanner5(scrollPosition > (headerHeight + 1800));
	};

	const animationPropsBanner1 = useSpring({
		opacity: isVisible ? 1 : 0,
		transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
	});
	const animationPropsBanner2 = useSpring({
		opacity: isVisibleBanner2 ? 1 : 0,
		transform: isVisibleBanner2 ? 'translateY(0)' : 'translateY(50px)',
	});
	const animationPropsBanner3 = useSpring({
		opacity: isVisibleBanner3 ? 1 : 0,
		transform: isVisibleBanner3 ? 'translateY(0)' : 'translateY(50px)',
	});
	const animationPropsBanner4 = useSpring({
		opacity: isVisibleBanner4 ? 1 : 0,
		transform: isVisibleBanner4 ? 'translateY(0)' : 'translateY(50px)',
	});
	const animationPropsBanner5 = useSpring({
		opacity: isVisibleBanner5 ? 1 : 0,
		transform: isVisibleBanner5 ? 'translateY(0)' : 'translateY(50px)',
	});

	const waveAnimation = useSpring({
		from: { transform: 'translateX(0%)' },
		to: { transform: 'translateX(-50%)' },
		config: { duration: 10000 }, // Duración de la animación
		reset: true,
		reverse: false, // Controla la dirección
		loop: { reverse: true }, // Hace que la animación regrese
	});

	useEffect(() => {
		setIsVisible(true);
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
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
							<div className='text-ppal poppins-medium flex items-center justify-center'>
								Sé visible,
								<div className='text-ppal--efect ml-10'>
									<div className='text-ppal--efect__inner'>
										<div className='text-ppal--efect__content'>
											<span>crece <HiSparkles /> aumenta <HiCursorArrowRays /> mejora <HiRocketLaunch /></span>
											<span>crece <HiSparkles /> aumenta <HiCursorArrowRays /> mejora <HiRocketLaunch /></span>
										</div>
									</div>
								</div>
							</div>
							<div className='text-ppal poppins-medium flex items-center justify-center'>
								online
								<div className='text-ppal--info'>
									Nos especializamos en el diseño y desarrollo de páginas web que no solo impresionan, sino que también impulsan tu negocio hacia el éxito.
								</div>
							</div>
							<div className='text-ppal poppins-medium flex items-center justify-center'>
								con
								<div className='text-ppal--efect-two ml-10'>
									<div className='text-ppal--efect__inner'>
										<div className='text-ppal--efect__content text-ppal--efect__content--custom'>
											<span>Dinno <HiMiniHeart /></span>
											<span>Dinno <HiSparkles /></span>
										</div>
									</div>
								</div>
							</div>
						</animated.div>

						<div id="banner-ppal">
							<BannerText
								subtitle={Textos.main.subtitle}
								title={Textos.main.title}
								text={Textos.main.text}
								buttonsDemo={true}
							/>
						</div>

						<div className='wave-background bg-gray relative'>
							<animated.div className="wave" style={waveAnimation}>
								<svg
									viewBox="0 0 2400 300" // SVG más grande
									preserveAspectRatio="none"
									className="wave-svg"
								>
									<path
										d="M0,200 C300,100 600,300 900,200 C1200,100 1500,300 1800,200 C2100,100 2400,200 2400,300 L0,300 Z"
										fill="white"
									/>
								</svg>
							</animated.div>
						</div>
					</div>

					<div className='banner-principal' id="banner-secondary">
						<animated.div style={!isMobile ? animationPropsBanner1 : {}} className="animated-element">
							<BannerText
								subtitle={Textos.main.subtitle}
								buttonsDemo={false}
							/>
						</animated.div>
					</div>

					<div className='banner-principal'>
						<Chip title={'Paquetes'} light={true} direction={'center'} />
						<BannerText
							title={Textos.about.title}
							text={Textos.about.text}
							buttonsDemo={false}
							size={'large'}
						/>

						<animated.div style={!isMobile ? animationPropsBanner2 : {}} className="animated-element">
							<PackageWeb
								order={1}
								chipText='Básico'
								title={TextServices.basic.title}
								description={TextServices.basic.text}
								nameAction='¡Comienza con lo básico!'
								action={'contacto/basico'}
								image={Product1}
							/>
						</animated.div>

						<animated.div style={!isMobile ? animationPropsBanner3 : {}} className="animated-element">
							<PackageWeb
								order={2}
								chipText='Empresarial'
								title={TextServices.enterprise.title}
								description={TextServices.enterprise.text}
								nameAction='¡Impulsa tu negocio!'
								action={'contacto/empresarial'}
								image={Product2}
							/>
						</animated.div>

						<animated.div style={!isMobile ? animationPropsBanner4 : {}} className="animated-element">
							<PackageWeb
								order={1}
								chipText='Personalizado'
								title={TextServices.premium.title}
								description={TextServices.premium.text}
								nameAction='¡Crea tu sitio único!'
								action={'contacto/personalizado'}
								image={Product3}
							/>
						</animated.div>
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
						<animated.div style={!isMobile ? animationPropsBanner5 : {}} className="animated-element">
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
						</animated.div>

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
							<BannerCall secondary={true} />
						</div>
					</div>

					{/*<div className='wave-container relative'>
						<div className='wave-background relative'>
							<animated.div className="wave" style={waveAnimation}>
								<svg
									viewBox="0 0 2400 300" // SVG más grande
									preserveAspectRatio="none"
									className="wave-svg"
								>
									<path
										d="M0,200 C300,100 600,300 900,200 C1200,100 1500,300 1800,200 C2100,100 2400,200 2400,300 L0,300 Z"
										fill="white"
									/>
								</svg>
							</animated.div>
						</div>
					</div>*/}
				</div>
			}
		</Layout>
	)
}

export default Home