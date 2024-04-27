import '../SliderTestimonial/slider.css'

interface IProps {
	text: string;
	image: string;
	name: string;
	color: string;
}

const Testimonial = ({ text, image, name, color }: IProps) => {
	return (
		<div className='sliderTestimonial__item p-20 flex flex-wrap content-between' style={{ background: color }}>
			<p className='banner-principal__text--primary poppins-medium text-principal text-[30px] text-principal'>{text}</p>
			<div className='flex items-center'>
				<div className='sliderTestimonial__item__circle flex-none mr-5'>
					<img src={image} alt="" />
				</div>
				<p className='banner-principal__text--primary poppins-medium text-principal text-[16px] w-auto text-principal'>{name}</p>
			</div>
		</div>
	)
}

export default Testimonial