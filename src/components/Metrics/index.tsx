import './metrics.css'

const Metrics = () => {
	return (
		<div>
			<div className='metrics'>
				<h5 className='banner-principal__text--primary poppins-medium text-principal text-[30px]'>Resultados que hablan por sí mismos</h5>
				<div className='flex items-center justify-center mt-20'>
					<div className='metrics__item'>
						<h6 className='poppins-medium text-principal title__one text-secundario'>95%</h6>
						<p className='be-vietnam-light text text-text'>Porcentaje de Retención </p>
					</div>
					<div className='metrics__item border-x border-[#b9bed1]'>
						<h6 className='poppins-medium text-principal title__one text-secundario'>10+</h6>
						<p className='be-vietnam-light text text-text'>Proyectos Exitosos</p>
					</div>
					<div className='metrics__item'>
						<h6 className='poppins-medium text-principal title__one text-secundario'>10+</h6>
						<p className='be-vietnam-light text text-text'>Clientes Satisfechos</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Metrics