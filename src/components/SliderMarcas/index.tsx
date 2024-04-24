import './slider.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface CardSlider {
	id: number;
	image: string;
}

interface Props {
	title: string;
	data: CardSlider[];
}

const SliderMarcas = ({ title, data }: Props) => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 1500,
		slidesToShow: 6,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
	};

	return (
		<div className='sliderMarcas'>
			<p className='sliderMarcas__title be-vietnam-light text text-text text-center mb-10'>{title}</p>
			<div className='sliderMarcas__container'>
				<Slider {...settings}>
					{data.map((item) => (
						<div key={item.id} className="slider-item">
							<img className="slider-image" src={item.image} width={100} loading="lazy" alt="" />
						</div>
					))}
				</Slider>
			</div>
		</div>
	)
}

export default SliderMarcas