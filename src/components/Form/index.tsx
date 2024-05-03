import './form.css';
import Button from '../Button';

const Form = () => {
	return (
		<div className="form">
			<div className='form__top flex justify-between'>
				<div className='w-[49%]'>
					<input className="form__item bg-gray text text-principal be-vietnam-light" type="text" name="name" id="name" placeholder="Nombre" />
				</div>
				<div className='w-[49%]'>
					<input className="form__item bg-gray text text-principal be-vietnam-light" type="text" name="email" id="email" placeholder="Email" />
				</div>
			</div>
			<div className='form__bottom mt-10'>
				<textarea className='form__item form__item--full bg-gray text text-principal be-vietnam-light' name="message" id="message" placeholder="Mensaje"></textarea>
			</div>
			<div className='mt-10'>
				<Button text={'Enviar'} type={'secondary'} action={''} large={true} />
			</div>
		</div>
	)
}

export default Form