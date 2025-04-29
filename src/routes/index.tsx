import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Comanda from '../pages/Comanda';
import SplashScreen from '../pages/SplashScreen';
import ReviewPage from '../pages/Revisar';

export default function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<SplashScreen />} />
			<Route path="/home" element={<Home />} />
			<Route path="/comanda" element={<Comanda />} />
			<Route path="/revisar" element={<ReviewPage />} />
			<Route path="/precos" element={<div>Preços</div>} />
			<Route path="/vendas" element={<div>Vendas</div>} />
			<Route path="/faturamento" element={<div>Faturamento</div>} />
		</Routes>
	);
}
