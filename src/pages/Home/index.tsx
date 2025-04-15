import * as S from './styles';

export default function Home() {
	return (
		<S.Container>
			<S.Shortcut to="/comanda">Comanda</S.Shortcut>
			<S.Shortcut to="/precos">Preços</S.Shortcut>
			<S.Shortcut to="/vendas">Vendas</S.Shortcut>
			<S.Shortcut to="/faturamento">Faturamento</S.Shortcut>
		</S.Container>
	);
}
