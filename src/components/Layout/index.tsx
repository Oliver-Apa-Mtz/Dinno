import { FloatingWhatsApp } from 'react-floating-whatsapp';

import Header from '../Header';
import Footer from '../Footer';
import Cursor from '../Cursor';
import Logo from '../../assets/img/logo-whats.webp';

interface Props {
	children: React.ReactNode;
}
const Layout = ({ children }: Props) => {
	return (
		<div>
			<FloatingWhatsApp
				phoneNumber="3324806546"
				accountName="Dinno"
				allowClickAway
				notification
				notificationSound
				chatMessage="¡Hola! 👋 ¿En qué puedo ayudarte?"
				statusMessage="En línea"
				placeholder="Escribe un mensaje..."
				avatar={Logo}
				className="whats-custom"
			/>
			<Cursor />
			<Header />
			<main className="body-contain">
				{children}
			</main>
			<Footer />
		</div>
	)
}

export default Layout