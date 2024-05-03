import '../Home/home.css';
import Layout from '../../components/Layout';

const Blog = () => {

	return (
		<Layout>
			{
				<div>
					<div className='banner-principal flex items-center' style={{ height: '100vh' }}>
						<div className='efect__one'>
							<div className='efect__one--1'></div>
							<div className='efect__one--2'></div>
						</div>
						<div className='efect__two'>
							<div className='efect__two--1'></div>
							<div className='efect__two--2'></div>
						</div>
						<div className='banner-principal__text'>
							<h1 className='banner-principal__text--primary poppins-medium title__one title__one--big text-principal'>
								Proximamente
							</h1>
						</div>
					</div>
				</div>
			}
		</Layout>

	)
}

export default Blog