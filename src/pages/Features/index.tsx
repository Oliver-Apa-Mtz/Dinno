
import '../Home/home.css';
import Layout from '../../components/Layout';
import BannerText from '../../components/BannerText';
import Chip from '../../components/Chips';
import PackageWeb from '../../components/PackageWeb';
import FeatureItem from '../../components/Feature';
import BannerCall from '../../components/BannerCall';

import Product1 from '../../assets/img/sitio-1.png';
import Product2 from '../../assets/img/sitio-2.png';
import Product3 from '../../assets/img/sitio-3.png';

import { Textos, TextServices, TextFeature } from '../../utils/textos';

const Features = () => {

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
							title={TextServices.title}
							text={TextServices.text}
							buttonsDemo={true}
						/>
					</div>

					<div>
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
							action={''}
							image={Product2}
						/>
						<PackageWeb
							order={1}
							chipText='Personalizado'
							title={TextServices.premium.title}
							description={TextServices.premium.text}
							nameAction='Solícita un Demo'
							action={''}
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

export default Features