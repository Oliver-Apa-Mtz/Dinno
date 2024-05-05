import { Routes, Route } from "react-router-dom";

import { ScrollToTop } from '../utils/utils';
import Home from "../pages/Home";
import Features from "../pages/Features";
import Prices from '../pages/Prices';
import Contact from '../pages/Contact';
import Blog from '../pages/Blog';
import ThankYou from '../pages/Thanks';

import { Analytics } from "@vercel/analytics/react"
//import Building from "../pages/Building";

export const Router = () => {
	return (
		<>
			<ScrollToTop />
			<Analytics />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/inicio" element={<Home />} />
				<Route path="/caracteristicas" element={<Features />} />
				<Route path="/precios" element={<Prices />} />
				<Route path="/contacto" element={<Contact />} />
				<Route path="/contacto/:paquete" element={<Contact />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/nosotros" element={<Blog />} />
				<Route path="/gracias-por-contactarnos" element={<ThankYou />} />
				{/*<Route path="/" element={<Building />} />*/}
			</Routes>
		</>
	);
}
