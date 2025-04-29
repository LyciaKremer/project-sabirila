import { useState } from 'react';
import * as S from './styles';
import { BiMenu, BiMoon, BiSun, BiX } from 'react-icons/bi';
import { useTheme } from '../../hooks/useTheme';

export function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const { isDark, toggleTheme } = useTheme();

	return (
		<S.Container>
			<S.Hamburger onClick={() => setIsOpen(!isOpen)}>{isOpen ? <BiX /> : <BiMenu />}</S.Hamburger>
			{/* 
			<S.Nav>
				<S.NavLink href="/cardapio">Cardápio</S.NavLink>
				<S.NavLink href="/comanda">Comanda</S.NavLink>
				<S.NavLink href="/sobre">Sobre</S.NavLink>
				<S.NavLink href="/contato">Contato</S.NavLink>
			</S.Nav> */}

			{isOpen && (
				<S.MobileMenu>
					<S.NavLink href="/comanda" onClick={() => setIsOpen(false)}>
						Comanda
					</S.NavLink>
					<S.NavLink href="/precos" onClick={() => setIsOpen(false)}>
						Preços
					</S.NavLink>
					<S.NavLink href="/vendas" onClick={() => setIsOpen(false)}>
						Vendas
					</S.NavLink>
					<S.NavLink href="/faturamento" onClick={() => setIsOpen(false)}>
						Faturamento
					</S.NavLink>
					<S.ThemeButton onClick={toggleTheme}>{isDark ? <BiMoon /> : <BiSun />}</S.ThemeButton>
				</S.MobileMenu>
			)}
		</S.Container>
	);
}
