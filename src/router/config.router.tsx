import { Routes, Route } from "react-router-dom";

//import Home from "../pages/Home";
import Building from "../pages/Building";

export const Router = () => {
	return (
		<Routes>
			{/*<Route path="/" element={<Home />} />*/}
			{<Route path="/" element={<Building />} />}
		</Routes>
	);
}
