import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/comanda" element={<div>Comanda</div>} />
      <Route path="/precos" element={<div>Preços</div>} />
      <Route path="/vendas" element={<div>Vendas</div>} />
      <Route path="/faturamento" element={<div>Faturamento</div>} />
    </Routes>
  );
}