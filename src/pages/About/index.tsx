import { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';

import '../Home/home.css';
import Layout from '../../components/Layout';
import BannerText from '../../components/BannerText';
import Chip from '../../components/Chips';
import PeopleCircle from '../../components/PeopleCircle';
import SliderPeople from '../../components/SliderPeople';
import SliderTestimonial from '../../components/SliderTestimonial';
import BannerCall from '../../components/BannerCall';
import Button from '../../components/Button';

import { Textos, DataPeople, TextAbout, DataTestimonial } from '../../utils/textos';

const About = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [isVisibleBanner2, setIsVisibleBanner2] = useState(false);
	const [isVisibleBanner3, setIsVisibleBanner3] = useState(false);
	const isMobile = window.innerWidth <= 1023;

	const handleScroll = () => {
		const scrollPosition = window.scrollY;
		const headerHeight = 500;
		setIsVisibleBanner3(scrollPosition > (headerHeight));
	};

	const animationPropsBanner1 = useSpring({
		opacity: isVisible ? 1 : 0,
	});
	const animationPropsBanner2 = useSpring({
		opacity: isVisibleBanner2 ? 1 : 0,
		transform: isVisibleBanner2 ? 'translateY(0)' : 'translateY(50px)',
	});
	const animationPropsBanner3 = useSpring({
		opacity: isVisibleBanner3 ? 1 : 0,
		transform: isVisibleBanner3 ? 'translateY(0)' : 'translateY(50px)',
	});

	useEffect(() => {
		setIsVisible(true);
		setIsVisibleBanner2(true);
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
							<>
								<BannerText
									subtitle={Textos.conocenos.subtitle}
									title={Textos.conocenos.title}
									text={Textos.conocenos.text}
									buttonsDemo={false}
								/>
								<PeopleCircle title={TextAbout.peopleTitle} items={DataPeople} />
							</>
						</animated.div>
						<animated.div style={!isMobile ? animationPropsBanner2 : {}} className="animated-element">
							<div className='mt-20'>
								<div className='banner-principal__buttons'>
									<Button text={'Conócenos'} type={'primary'} action={'nosotros'} />
									<Button text={'Solícita un Demo'} type={'secondary'} action={'contacto'} />
								</div>
								<SliderPeople />
							</div>
						</animated.div>
					</div>

					<div className='banner-principal'>
						<Chip title={'Historia'} light={true} direction={'center'} />
						<animated.div style={!isMobile ? animationPropsBanner3 : {}} className="animated-element">
							<div>
								<div className='banner-principal__text'>
									<h1 className='banner-principal__text--primary poppins-medium text-principal title__one--small'>
										{TextAbout.title}
									</h1>
									<p className='banner-principal__text--secondary be-vietnam-light text text-text banner-principal__text--large'>
										{TextAbout.sub}
									</p>
									<p className='banner-principal__text--secondary be-vietnam-light text text-text banner-principal__text--large'>
										{TextAbout.sub2}
									</p>
									<p className='banner-principal__text--secondary be-vietnam-light text text-text banner-principal__text--large'>
										{TextAbout.sub3}
									</p>
									<p className='banner-principal__text--secondary be-vietnam-light text text-text banner-principal__text--large'>
										{TextAbout.sub4}
									</p>
									<h2 className='banner-principal__text--extra poppins-medium text text-principal'>
										{TextAbout.sub5}
									</h2>
									<p className='banner-principal__text--extra poppins-medium text text-principal pt-4'>🌐 🚀</p>
								</div>
							</div>
						</animated.div>
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

export default About