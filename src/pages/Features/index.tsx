import { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';

import '../Home/home.css';
import Layout from '../../components/Layout';
import BannerText from '../../components/BannerText';
import Chip from '../../components/Chips';
import PackageWeb from '../../components/PackageWeb';
import FeatureItem from '../../components/Feature';
import BannerCall from '../../components/BannerCall';

import Product1 from '../../assets/img/sitio-1.webp';
import Product2 from '../../assets/img/sitio-2.webp';
import Product3 from '../../assets/img/sitio-3.webp';

import { Textos, TextServices, TextFeature } from '../../utils/textos';

const Features = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [isVisibleBanner2, setIsVisibleBanner2] = useState(false);
	const [isVisibleBanner3, setIsVisibleBanner3] = useState(false);
	const [isVisibleBanner4, setIsVisibleBanner4] = useState(false);
	const [isVisibleBanner5, setIsVisibleBanner5] = useState(false);
	const isMobile = window.innerWidth <= 1023;

	const handleScroll = () => {
		const scrollPosition = window.scrollY;
		const headerHeight = 100;
		setIsVisibleBanner2(scrollPosition > headerHeight);
		setIsVisibleBanner3(scrollPosition > (headerHeight + 500));
		setIsVisibleBanner4(scrollPosition > (headerHeight + 1000));
		setIsVisibleBanner5(scrollPosition > (headerHeight + 1700));
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
	const animationPropsBanner4 = useSpring({
		opacity: isVisibleBanner4 ? 1 : 0,
		transform: isVisibleBanner4 ? 'translateY(0)' : 'translateY(50px)',
	});
	const animationPropsBanner5 = useSpring({
		opacity: isVisibleBanner5 ? 1 : 0,
		transform: isVisibleBanner5 ? 'translateY(0)' : 'translateY(50px)',
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
							<BannerText
								title={TextServices.title}
								text={TextServices.text}
								buttonsDemo={true}
							/>
						</animated.div>
					</div>

					<div>
						<animated.div style={!isMobile ? animationPropsBanner2 : {}} className="animated-element">
							<PackageWeb
								order={1}
								chipText='Básico'
								title={TextServices.basic.title}
								description={TextServices.basic.text}
								nameAction='Solícita un Demo'
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
								nameAction='Solícita un Demo'
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
								nameAction='Solícita un Demo'
								action={'contacto/personalizado'}
								image={Product3}
							/>
						</animated.div>
					</div>

					<div>
						<div>
							<BannerCall />
						</div>
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

export default Features