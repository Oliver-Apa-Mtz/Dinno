import { useState } from 'react'
import './questions.css'

interface ItemDrop {
	title: string;
	text: string;
}
interface IProps {
	data: ItemDrop[];
}

const Questions = ({ data }: IProps) => {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);

	const toggleAccordion = (index: number) => {
		setActiveIndex(activeIndex === index ? null : index);
	};
	return (
		<div className="Questions">
			{data.map((item, index) => (
				<div key={index} className={`Questions__item p-6 cursor-pointer rounded-xl mb-4 ${activeIndex === index ? 'Questions__item--active' : ''}`}>
					<h2 id={`accordion-heading-${index + 1}`} className="flex items-center justify-between w-full p-5" onClick={() => toggleAccordion(index)}>
						<span className='poppins-medium text-principal text-principal text-[16px]'>{item.title}</span>
						<svg data-accordion-icon className={`w-3 h-3 shrink-0 w-[20px] h-auto text-text ${activeIndex === index ? '' : 'rotate-180'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
							<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 5 5 1 1 5" />
						</svg>
					</h2>
					<div id={`accordion-collapse-body-${index + 1}`} className={`transition-all duration-300 ease-in-out ${activeIndex === index ? 'block' : 'hidden'}`} aria-labelledby={`accordion-collapse-heading-${index + 1}`}>
						<div className="p-5">
							<p className="be-vietnam-light text text-text">{item.text}</p>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default Questions