import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Outlet } from "react-router-dom";

import { ScrollToTop } from '../utils/utils';
import Home from "../pages/Home";
import Features from "../pages/Features";
import Prices from '../pages/Prices';
import Contact from '../pages/Contact';
import Blog from '../pages/Blog';
import ThankYou from '../pages/Thanks';
import Privacy from '../pages/Privacy';
import About from '../pages/About';
import Loading from '../components/Loading';

import { Analytics } from "@vercel/analytics/react"
//import Building from "../pages/Building";

const MainRouter = () => {
	const [showLoading, setshowLoading] = useState(false);
	const location = useLocation();

	useEffect(() => {
		setshowLoading(true);
	}, [location]);

	const handleFireworksComplete = () => {
		setshowLoading(false);
	};

	return (
		<>
			{showLoading && <Loading onComplete={handleFireworksComplete} />}
			{!showLoading && <Outlet />}
		</>
	);
};

export const Router = () => {
	return (
		<>
			<ScrollToTop />
			<Analytics />
			<Routes>
				<Route path="/" element={<MainRouter />}>
					<Route index element={<Home />} />
					<Route path="/inicio" element={<Home />} />
					<Route path="/nosotros" element={<About />} />
					<Route path="/servicios" element={<Features />} />
					<Route path="/precios" element={<Prices />} />
					<Route path="/contacto" element={<Contact />} />
					<Route path="/contacto/:paquete" element={<Contact />} />
					<Route path="/blog" element={<Blog />} />
					<Route path="/gracias-por-contactarnos" element={<ThankYou />} />
					<Route path="/aviso-de-privacidad" element={<Privacy />} />
					{/*<Route path="/" element={<Building />} />*/}
				</Route>
			</Routes>
		</>
	);
}
