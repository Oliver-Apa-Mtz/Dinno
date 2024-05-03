import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Features from "../pages/Features";
import Prices from '../pages/Prices';
import Contact from '../pages/Contact';
import Blog from '../pages/Blog';
import { ScrollToTop } from '../utils/utils';
//import Building from "../pages/Building";

export const Router = () => {
	return (
		<>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/caracteristicas" element={<Features />} />
				<Route path="/precios" element={<Prices />} />
				<Route path="/contacto" element={<Contact />} />
				<Route path="/blog" element={<Blog />} />
				{/*<Route path="/" element={<Building />} />*/}
			</Routes>
		</>
	);
}
