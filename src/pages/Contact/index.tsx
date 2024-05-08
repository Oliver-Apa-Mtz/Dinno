import { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useParams } from 'react-router-dom';

import '../Home/home.css';
import Layout from '../../components/Layout';
import BannerText from '../../components/BannerText';
import Chip from '../../components/Chips';
import BannerCall from '../../components/BannerCall';
import Questions from '../../components/Questions';
import Form from '../../components/Form';

import { DataQuestions, TextServices } from '../../utils/textos';

const Contact = () => {
	const { paquete } = useParams();
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
					<div className='banner-principal banner-principal--custom'>
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
								title={TextServices.contact.title}
								text={TextServices.contact.text}
								buttonsDemo={false}
							/>
						</animated.div>
						<animated.div style={!isMobile ? animationPropsBanner2 : {}} className="animated-element">
							<Form paquete={paquete || ''} />
						</animated.div>
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

export default Contact