import Button from '../Button';

interface IProps {
	title?: string;
	subtitle?: string;
	text?: string;
	buttonsDemo: boolean;
	size?: string;
}
const BannerText = ({ title, subtitle, text, buttonsDemo, size }: IProps) => {
	return (
		<div>
			<div className='banner-principal__text'>
				{subtitle && (
					<h2 className='banner-principal__text--extra poppins-medium text text-principal'>
						{subtitle}
					</h2>
				)}
				{title && (
					<h1 className='banner-principal__text--primary poppins-medium title__one text-principal'>
						{title}
					</h1>
				)}
				{text && (
					<p className={`banner-principal__text--secondary be-vietnam-light text text-text ${size === 'large' ? 'banner-principal__text--large' : ''}`}>
						{text}
					</p>
				)}
				{buttonsDemo && (
					<div className='banner-principal__buttons'>
						<Button text={'Conócenos'} type={'primary'} />
						<Button text={'Solícita un Demo'} type={'secondary'} />
					</div>
				)}
			</div>
		</div>
	)
}


export default BannerText