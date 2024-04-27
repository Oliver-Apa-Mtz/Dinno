import './feature.css'

interface IProps {
	title: string;
	description: string;
	image: string;
}
const FeatureItem = ({ title, description, image }: IProps) => {
	return (
		<div className='FeatureItem px-4'>
			<div className='FeatureItem__circle rounded-full'>
				<img src={image} />
			</div>
			<div>
				<h5 className='banner-principal__text--primary poppins-medium text-principal text-[20px]'>{title}</h5>
				<p className='banner-principal__text--secondary be-vietnam-light text text-text'>{description}</p>
			</div>
		</div>
	)
}

export default FeatureItem