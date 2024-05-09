import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';

import './form.css';
import { isValidEmail } from '../../utils/utils';

interface IProps {
	paquete: string | null;
}

const Form = ({ paquete }: IProps) => {
	const navigate = useNavigate();
	const formRef = useRef<HTMLFormElement | null>(null);
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		amount: '',
		message: '',
		package: ''
	});
	const [alert, setAlert] = useState({
		show: false,
		message: '',
	})

	const handleChange = (e: any) => {
		setAlert({
			show: false,
			message: '',
		})
		const { name, value } = e.target;
		if (name === 'amount') {
			if (!isNaN(value) && value.length < 10) {
				setFormData({
					...formData,
					['amount']: value
				});
			} else {
				return;
			}
		} else if (name === 'name' || name === 'email') {
			if (value.length < 40) {
				setFormData({
					...formData,
					[name]: value
				});
			} else {
				return;
			}
		} else if (name === 'message') {
			if (value.length < 300) {
				setFormData({
					...formData,
					[name]: value
				});
			} else {
				return;
			}
		} else {
			setFormData({
				...formData,
				[name]: value
			});
		}
	};

	const sendEmail = (e: any) => {
		e.preventDefault();
		if (formData.name.length > 0 && formData.email.length > 0 && formData.message.length > 0) {
			if (!isValidEmail(formData.email)) {
				setAlert({
					show: true,
					message: 'Por favor, introduce un correo electrónico válido'
				})
				return;
			}
			emailjs.sendForm(
				import.meta.env.VITE_VERCEL_ENV_EMAILJS_SERVICE_ID || '',
				import.meta.env.VITE_VERCEL_ENV_EMAILJS_TEMPLATE_ID || '',
				e.target,
				import.meta.env.VITE_VERCEL_ENV_EMAILJS_USER_ID
			).then(() => {
				navigate('/gracias-por-contactarnos')
			}, () => {
				setAlert({
					show: true,
					message: 'Por el momento el servicio no esta disponible, intentalo más tarde'
				})
			});

			setFormData({
				name: '',
				email: '',
				amount: '',
				message: '',
				package: ''
			});
		} else {
			setAlert({
				show: true,
				message: 'Por favor complete todos los campos'
			})
		}
	};

	useEffect(() => {
		if (paquete && paquete.length > 0) {
			setFormData({
				...formData,
				package: paquete
			})
		}
	}, [paquete]);

	return (
		<div className="form">
			<form onSubmit={sendEmail} ref={formRef}>
				<div className='form__top flex justify-between'>
					<div className='w-[49%]'>
						<input className="form__item bg-gray text text-principal be-vietnam-light" type="text" name="name" id="name" placeholder="Nombre *" value={formData.name} onChange={handleChange} />
					</div>
					<div className='w-[49%]'>
						<input className="form__item bg-gray text text-principal be-vietnam-light" type="text" name="email" id="email" placeholder="Email *" value={formData.email} onChange={handleChange} />
					</div>
				</div>
				<div className='form__bottom mt-10'>
					<input className="form__item bg-gray text text-principal be-vietnam-light" type="text" name="amount" id="amount" placeholder="Presupuesto *" value={formData.amount} onChange={handleChange} />
				</div>
				<div className='form__bottom mt-10'>
					<select id="package" name="package" className="form__item bg-gray text text-principal be-vietnam-light" value={formData.package} onChange={handleChange}>
						<option value=''>¿Que paquete te interesa?</option>
						<option value="basico">Básico</option>
						<option value="empresarial">Empresarial</option>
						<option value="personalizado">Personalizado</option>
					</select>
				</div>
				<div className='form__bottom mt-10'>
					<textarea className='form__item form__item--full bg-gray text text-principal be-vietnam-light' name="message" id="message" placeholder="Mensaje *" value={formData.message} onChange={handleChange}></textarea>
				</div>
				<div className='mt-10 w-max mx-auto'>
					<div className='flex items-center justify-center'>
						<div className='button button--secondary cursor-pointer' style={{ padding: '0px' }}>
							<div>
								<input className='cursor-pointer button--large' type="submit" value="Enviar" disabled={alert.show} />
							</div>
						</div>
					</div>
				</div>
				{alert.show && (
					<div className="bg-[#FA7070] p-8 rounded-2xl my-10" role="alert">
						<p className="text-white be-vietnam-light text">{alert.message}</p>
					</div>
				)}
			</form>
		</div>
	)
}

export default Form