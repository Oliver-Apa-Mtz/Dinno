import './feature.css'

interface IProps {
	title: string;
	description: string;
	image: string;
}
const FeatureItem = ({ title, description, image }: IProps) => {
	return (
		<div className='FeatureItem px-4'>
			<div className='FeatureItem__circle rounded-full flex items-center justify-center'>
				<img src={image} className='invert' alt={title} loading="lazy" />
			</div>
			<div>
				<p className='h5 banner-principal__text--primary poppins-medium text-principal text-[20px]'>{title}</p>
				<p className='banner-principal__text--secondary be-vietnam-light text text-text'>{description}</p>
			</div>
		</div>
	)
}

export default FeatureItem