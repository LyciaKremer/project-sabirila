import { useState, useEffect } from 'react';

export interface ItemPedido {
	id: string;
	tipo: 'comida' | 'bebida';
	imagem: string;
	nome: string;
	quantidade: number;
	precoUnitario: number;
	precoTotal: number;
	sabores?: string[];
	adicionais?: { nome: string; preco: number; quantidade: number }[];
}

export function useComanda() {
	const [pedido, setPedido] = useState<ItemPedido[]>(() => {
		const pedidoSalvo = localStorage.getItem('pedido');
		return pedidoSalvo ? JSON.parse(pedidoSalvo) : [];
	});

	useEffect(() => {
		const pedidoSalvo = localStorage.getItem('pedido');
		if (pedidoSalvo) {
			setPedido(JSON.parse(pedidoSalvo));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('pedido', JSON.stringify(pedido));
	}, [pedido]);

	function adicionarItem(item: ItemPedido) {
		setPedido((prev) => [...prev, item]);
	}

	function removerItem(index: number) {
		setPedido((prev) => prev.filter((_, i) => i !== index));
	}

	function definirPedido(novoPedido: ItemPedido[]) {
		setPedido(novoPedido);
	}

	function editarItem(index: number, novoItem: ItemPedido) {
		setPedido((prev) => prev.map((item, i) => (i === index ? novoItem : item)));
	}

	const total = pedido.reduce((acc, item) => acc + item.precoTotal, 0);

	return {
		pedido,
		adicionarItem,
		removerItem,
		editarItem,
		definirPedido,
		total,
	};
}
