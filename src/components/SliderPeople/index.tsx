import './slider.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { DataPeople } from '../../utils/textos';

const SliderPeople = () => {
	const settings = {
		className: "liderPeople__container",
		dots: false,
		infinite: true,
		speed: 40000,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		variableWidth: true,
		cssEase: "linear",
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: false
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: false
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: false
				}
			}
		]
	};

	return (
		<div className='sliderPeople'>
			<div className='sliderPeople__container w-full'>
				<Slider {...settings}>
					<div className='sliderPeople__item py-20 px-5 flex flex-wrap content-between'>
						<div className='sliderPeople__color flex flex-wrap content-between rounded-[14px] ml-5 flex items-end px-4 py-6' style={{ background: '#BFF6C3' }}>
							<p className='be-vietnam-medium text-[12px] text-text'>Años de Experiencia</p>
							<p className='poppins-bold text-principal text-[34px] -mb-4'>7+</p>
						</div>
						<div className='sliderPeople__bg flex rounded-[14px] ml-5 flex items-end p-4' style={{ backgroundImage: `url(${DataPeople[2].image})`, backgroundPosition: 'center bottom', backgroundSize: 'cover' }}>
							<div className='sliderPeople__bg--info rounded-[14px] bg-white p-2 w-full'>
								<p>{DataPeople[2].title}</p>
								<p>{DataPeople[2].position}</p>
							</div>
						</div>
						<div className='sliderPeople__color sliderPeople__color--large flex content-start flex-wrap rounded-[14px] ml-5 flex items-end p-4 bg-white'>
							<p className='be-vietnam-medium text-[12px] text-text mb-4'>Equipos de trabajo</p>
							<div className='flex flex-wrap gap-3'>
								<div className='px-4 py-2 bg-gray rounded-2xl'>Intagono</div>
								<div className='px-4 py-2 bg-gray rounded-2xl'>Orderly</div>
								<div className='px-4 py-2 bg-gray rounded-2xl'>Dacodes</div>
								<div className='px-4 py-2 bg-gray rounded-2xl'>Around</div>
								<div className='px-4 py-2 bg-gray rounded-2xl'>Nextia</div>
								<div className='px-4 py-2 bg-gray rounded-2xl'>Infonavit</div>
							</div>
						</div>
					</div>
					<div className='sliderPeople__item py-20 px-5 flex flex-wrap content-between'>
						<div className='sliderPeople__info bg-white rounded-[14px] py-6 pl-8 pr-14 flex flex-wrap content-between'>
							<p className='banner-principal__text--primary poppins-medium text-principal text lg:text-[16px] w-auto text-principal'>
								Tú eres lo más importante, y estamos aquí para escucharte y ayudarte. 🌟
							</p>
							<div className='flex items-center'>
								<div className='sliderPeople__item__circle flex-none mr-5 flex items-center justify-center'>
									<img src={DataPeople[1].image} alt={DataPeople[1].title} />
								</div>
								<p>{DataPeople[1].position}</p>
							</div>
						</div>
						<div className='sliderPeople__bg flex rounded-[14px] -ml-10 flex items-end p-4' style={{ backgroundImage: `url(${DataPeople[1].image})`, backgroundPosition: 'center center', backgroundSize: 'cover' }}>
							<div className='sliderPeople__bg--info rounded-[14px] bg-white p-2 w-full'>
								<p>{DataPeople[1].title}</p>
								<p>{DataPeople[1].position}</p>
							</div>
						</div>
					</div>
					<div className='sliderPeople__item py-20 px-5 flex flex-wrap content-between'>
						<div className='sliderPeople__color sliderPeople__color--large flex flex-wrap rounded-[14px] ml-5 flex items-end p-4 bg-white'>
							<p className='be-vietnam-medium text-[12px] text-text mb-4'>Tecnologías</p>
							<div className='flex flex-wrap gap-3'>
								<div className='px-4 py-2 bg-gray rounded-2xl'>CSS</div>
								<div className='px-4 py-2 bg-gray rounded-2xl'>HTML</div>
								<div className='px-4 py-2 bg-gray rounded-2xl'>Javascript</div>
								<div className='px-4 py-2 bg-gray rounded-2xl'>Typescript</div>
								<div className='px-4 py-2 bg-gray rounded-2xl'>React</div>
								<div className='px-4 py-2 bg-gray rounded-2xl'>Vue</div>
							</div>
						</div>
						<div className='sliderPeople__bg flex rounded-[14px] ml-5 flex items-end p-4' style={{ backgroundImage: `url(${DataPeople[3].image})`, backgroundPosition: 'center center', backgroundSize: 'cover' }}>
							<div className='sliderPeople__bg--info rounded-[14px] bg-white p-2 w-full'>
								<p>{DataPeople[3].title}</p>
								<p>{DataPeople[3].position}</p>
							</div>
						</div>
						<div className='sliderPeople__color flex flex-wrap content-between rounded-[14px] ml-5 flex items-end px-4 py-6' style={{ background: '#CAF4FF' }}>
							<p className='be-vietnam-medium text-[12px] text-text'>Proyectos</p>
							<p className='poppins-bold text-principal text-[34px] -mb-4'>16+</p>
						</div>
					</div>
					<div className='sliderPeople__item py-20 px-5 flex flex-wrap content-between'>
						<div className='sliderPeople__info bg-white rounded-[14px] py-6 pl-8 pr-[45px] flex flex-wrap content-between'>
							<p className='banner-principal__text--primary poppins-medium text-principal text lg:text-[16px] w-auto text-principal'>
								Dale vida a tu negocio en línea con una web increíble! 💻✨
							</p>
							<div className='flex items-center'>
								<div className='sliderPeople__item__circle flex-none mr-5 flex items-center justify-center'>
									<img src={DataPeople[0].image} alt={DataPeople[1].title} />
								</div>
								<p>{DataPeople[0].position}</p>
							</div>
						</div>
						<div className='sliderPeople__bg flex rounded-[14px] -ml-10 flex items-end p-4' style={{ backgroundImage: `url(${DataPeople[0].image})`, backgroundPosition: 'center center', backgroundSize: 'cover' }}>
							<div className='sliderPeople__bg--info rounded-[14px] bg-white p-2 w-full'>
								<p>{DataPeople[0].title}</p>
								<p>{DataPeople[0].position}</p>
							</div>
						</div>
					</div>
				</Slider>
			</div>
		</div>
	)
}

export default SliderPeople