import '../SliderTestimonial/slider.css'

interface IProps {
	text: string;
	image: string;
	name: string;
	color: string;
	id: number;
}

const Testimonial = ({ text, image, name, color, id }: IProps) => {
	return (
		<div className='sliderTestimonial__item p-20 flex flex-wrap content-between' style={{ background: color }}>
			<p className='banner-principal__text--primary poppins-medium text-principal text-[30px]'>{text}</p>
			<div className='flex items-center'>
				<div className={`${id === 2 ? 'sliderTestimonial__item__circle--custom' : ''} sliderTestimonial__item__circle flex-none mr-5 flex items-center justify-center`}>
					<img src={image} alt={text} loading="lazy" className={`${id === 1 ? '' : 'img-custom'}`} />
				</div>
				<p className='banner-principal__text--primary poppins-medium text-principal text-[14px] lg:text-[16px] w-auto'>{name}</p>
			</div>
		</div>
	)
}

export default Testimonial