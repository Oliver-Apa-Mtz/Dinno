import Button from '../Button';

interface IProps {
	title?: string;
	subtitle?: string;
	text?: string;
	buttonsDemo: boolean;
	size?: string;
	contactButton?: boolean;
}
const BannerText = ({ title, subtitle, text, buttonsDemo, size, contactButton }: IProps) => {
	return (
		<div>
			<div className='banner-principal__text'>
				{subtitle && (
					<h2 className='banner-principal__text--extra poppins-medium text text-principal'>
						{subtitle}
					</h2>
				)}
				{title && (
					<h1 className={`banner-principal__text--primary poppins-medium text-principal ${subtitle ? 'title__one' : 'title__one--small'}`}>
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
						<Button text={'Conócenos'} type={'primary'} action={'nosotros'} />
						<Button text={'Servicios Web'} type={'secondary'} action={'servicios'} />
					</div>
				)}
				{contactButton && (
					<div className='banner-principal__buttons'>
						<Button text={'Contáctanos'} type={'secondary'} action={'contacto'} />
					</div>
				)}
			</div>
		</div>
	)
}


export default BannerText