import { useTheme } from '../../hooks/useTheme';
import * as S from './styles';
import { BiSun, BiMoon, BiChevronRight } from 'react-icons/bi';

export default function Home() {
	const { isDark, toggleTheme } = useTheme();

	return (
		<S.Container>
			<S.Hello>
				<h1>Olá, Gabe!</h1>
				<S.ThemeButton onClick={toggleTheme}>{isDark ? <BiMoon /> : <BiSun />}</S.ThemeButton>
			</S.Hello>
			<S.CardBilling>
				<div>Em algum momento teremos algo legal pra mostrar aqui!</div>
				<span>¯\_(ツ)_/¯</span>
			</S.CardBilling>
			<S.Shortcuts>
				<S.Shortcut to="/comanda">
					<span className="text">
						Comanda <BiChevronRight />
					</span>
					<img src="./order.svg" alt="Comanda" />
				</S.Shortcut>
				<S.Shortcut to="/precos">
					<span className="text">
						Preços <BiChevronRight />
					</span>
					<img src="./order.svg" alt="Comanda" />
				</S.Shortcut>
				<S.Shortcut to="/vendas">
					<span className="text">
						Vendas <BiChevronRight />
					</span>
					<img src="./order.svg" alt="Comanda" />
				</S.Shortcut>
				<S.Shortcut to="/faturamento">
					<span className="text">
						Faturamento <BiChevronRight />
					</span>
					<img src="./order.svg" alt="Comanda" />
				</S.Shortcut>
			</S.Shortcuts>
		</S.Container>
	);
}
