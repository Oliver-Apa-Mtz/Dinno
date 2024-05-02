import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Features from "../pages/Features";
import Prices from '../pages/Prices';
//import Building from "../pages/Building";

export const Router = () => {
	return (
		<Routes>
			{<Route path="/" element={<Home />} />}
			<Route path="/caracteristicas" element={<Features />} />
			<Route path="/precios" element={<Prices />} />
			{/*<Route path="/" element={<Building />} />*/}
		</Routes>
	);
}
