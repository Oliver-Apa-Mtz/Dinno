import './slider.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Testimonial from '../Testimonial'

interface CardSlider {
	id: number;
	name: string;
	text: string;
	image: string;
	color: string;
}

interface Props {
	data: CardSlider[];
}

const SliderTestimonial = ({ data }: Props) => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 10000,
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 10000,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			}
		]
	};

	return (
		<div className='sliderTestimonial'>
			<div className='sliderTestimonial__container'>
				<Slider {...settings}>
					{data.map((item) => (
						<Testimonial key={item.id} name={item.name} text={item.text} image={item.image} color={item.color} id={item.id} />
					))}
				</Slider>
			</div>
		</div>
	)
}

export default SliderTestimonial