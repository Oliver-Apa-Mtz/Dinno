
import '../Home/home.css';
import Layout from '../../components/Layout';
import BannerText from '../../components/BannerText';
import Chip from '../../components/Chips';
import BannerCall from '../../components/BannerCall';
import Questions from '../../components/Questions';
import Form from '../../components/Form';

import { DataQuestions, TextServices } from '../../utils/textos';

const Contact = () => {
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
						<BannerText
							title={TextServices.contact.title}
							text={TextServices.contact.text}
							buttonsDemo={false}
						/>
						<Form />
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
							<BannerCall />
						</div>
					</div>
				</div>
			}
		</Layout>

	)
}

export default Contact