import './peopleCircle.css';

interface Items {
	title: string;
	image: string;
}
interface IProps {
	title: string;
	items: Items[];
}
const PeopleCircle = ({ title, items }: IProps) => {
	return (
		<div className="people-circle flex items-center justify-center">
			<div className='container-images relative ml-4'>
				{items.map((item, i) => {
					return (
						<div className='people-circle__item -ml-4' key={'people-circle' + i}>
							<img src={item.image} alt={item.title} loading="lazy" />
						</div>
					)
				})}
			</div>
			<div className="be-vietnam-light text-2xl text-text ml-4">
				<p>{title}</p>
			</div>
		</div>
	)
}

export default PeopleCircle