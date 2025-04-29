import { useState } from 'react';
import { useComanda, ItemPedido } from '../../hooks/useComanda';
import { products } from '../../data/products';
import { ProductTabs } from '../../components/productTabs';
import { FoodList } from '../../components/lists/FoodList';
import { DrinkList } from '../../components/lists/DrinkList';
import ReviewButton from '../../components/button/ReviewButton';
import { Comida, Bebida } from '../../data/products';
import * as S from './styles';
import ComidaModal from '../../components/modal/ComidaModal';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/header';
import { BiChevronLeft } from 'react-icons/bi';

export default function Comanda() {
	const [categoria, setCategoria] = useState<'comidas' | 'bebidas'>('comidas');
	const comanda = useComanda();
	const [comidaSelecionada, setComidaSelecionada] = useState<Comida | null>(null);
	const navigate = useNavigate();

	const handleAddComida = (item: Comida) => {
		setComidaSelecionada(item);
	};

	const handleAddBebida = (item: Bebida) => {
		const novoItem: ItemPedido = {
			id: item.id,
			tipo: 'bebida',
			imagem: item.imagem,
			nome: item.nome,
			quantidade: 1,
			precoUnitario: item.precoBase,
			precoTotal: item.precoBase * 1,
		};
		comanda.adicionarItem(novoItem);
	};

	const podeRevisarPedido = (): boolean => {
		if (comanda.pedido.length === 0) {
			return false;
		}

		const temBebida = comanda.pedido.some((item) => item.tipo === 'bebida');
		const comidas = comanda.pedido.filter((item) => item.tipo === 'comida');

		if (comidas.length === 0 && temBebida) {
			return true;
		}

		const comidasValidas = comidas.every((item) => {
			const qtd = item.sabores?.length ?? 0;

			if (item.nome.toLowerCase().includes('tradicional')) return qtd === 1;
			if (item.nome.toLowerCase().includes('2 em 1')) return qtd === 2;
			if (item.nome.toLowerCase().includes('3 em 1')) return qtd === 3;

			return false;
		});

		return comidasValidas;
	};
	return (
		<S.Container>
			<S.HeaderLine>
				<S.ReturnButton onClick={() => navigate(-1)}>
					<BiChevronLeft /> Voltar
				</S.ReturnButton>
				<Header />
			</S.HeaderLine>

			<ProductTabs active={categoria} onChange={setCategoria} />
			{categoria === 'comidas' ? (
				<FoodList produtos={products.comidas} onAdd={handleAddComida} />
			) : (
				<DrinkList produtos={products.bebidas} onAdd={handleAddBebida} />
			)}
			{podeRevisarPedido() && <ReviewButton pedido={comanda.pedido} />}
			{comidaSelecionada && (
				<ComidaModal
					item={comidaSelecionada}
					onClose={() => setComidaSelecionada(null)}
					onAdd={({ sabores, adicionais }) => {
						const precoAdicionais = adicionais.reduce((acc, cur) => acc + cur.preco, 0);
						const precoTotal = comidaSelecionada.precoBase + precoAdicionais;

						const novoItem: ItemPedido = {
							id: comidaSelecionada.id + '-' + new Date().getTime(),
							tipo: 'comida',
							imagem: comidaSelecionada.imagem,
							nome: comidaSelecionada.nome,
							quantidade: 1,
							precoUnitario: precoTotal,
							precoTotal,
							sabores,
							adicionais: adicionais.map((a) => ({
								...a,
								quantidade: 1,
							})),
						};

						comanda.adicionarItem(novoItem);
						setComidaSelecionada(null);
					}}
				/>
			)}
		</S.Container>
	);
}
