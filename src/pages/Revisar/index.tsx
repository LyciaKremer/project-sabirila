import { BiChevronLeft, BiPlus, BiTrash, BiMinus } from 'react-icons/bi';
import { Header } from '../../components/header';
import { ItemPedido, useComanda } from '../../hooks/useComanda';
import * as S from './styles';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import RegistroModal from '../../components/modal/MensagemModal';

export default function ReviewPage() {
	const navigate = useNavigate();
	const location = useLocation();
	const comanda = useComanda();

	const initialPedido: ItemPedido[] = location.state?.pedido || [];
	const [pedidoState, setPedidoState] = useState<ItemPedido[]>(initialPedido);

	const total = pedidoState.reduce((acc, item) => acc + item.precoTotal, 0);
	const quantidadeTotal = pedidoState.reduce((acc, item) => acc + item.quantidade, 0);

	const [isModalOpen, setModalOpen] = useState(false);
	const [modalTitle, setModalTitle] = useState('');
	const [modalMessage, setModalMessage] = useState('');

	useEffect(() => {
		comanda.definirPedido(pedidoState);
	}, [pedidoState, comanda]);

	const handleConfirm = async () => {
		try {
			const nomeVendedor = 'Gabe';
			const dadosParaPlanilha = pedidoState.map((item, index) => ({
				ID: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}-${index}`,
				'Nome do vendedor': nomeVendedor,
				Comida: item.tipo === 'comida' ? `${item.nome} (x${item.quantidade})` : '',
				Sabor: item.sabores?.join(', ') || '',
				Adicionais: item.adicionais?.map((a) => a.nome).join(', ') || '',
				'Valor unitário da comida': item.tipo === 'comida' ? item.precoUnitario.toFixed(2) : '',
				Bebidas: item.tipo === 'bebida' ? `${item.nome} (x${item.quantidade})` : '',
				'Valor unitário da bebida': item.tipo === 'bebida' ? item.precoUnitario.toFixed(2) : '',
				Total: item.precoTotal.toFixed(2),
			}));

			const response = await fetch(
				'https://script.google.com/macros/s/AKfycbyjBoAtOknxJ0xBqf1LRk9Et8-UmJSe_ljfhPbxLGKW4D5IaP6EUBx2OTCMP8ROKx7O/exec',
				{
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(dadosParaPlanilha),
				}
			);

			const result = await response.json();

			if (!response.ok || result.status !== 'success') {
				throw new Error(result.message || 'Erro desconhecido');
			}

			setModalTitle('Venda registrada com sucesso!');
			setModalMessage('Seu registro foi efetuado com sucesso!');
			setModalOpen(true);

			setTimeout(() => {
				comanda.definirPedido([]);
				navigate('/');
			}, 2000);
		} catch (error: unknown) {
			console.error('Erro ao enviar dados para a planilha:', error);

			let message = 'Erro desconhecido. Tente novamente.';
			if (error instanceof Error) {
				message = error.message;
			}

			setModalTitle('Erro ao registrar venda!');
			setModalMessage(message);
			setModalOpen(true);
		}
	};

	const handleRemove = (index: number) => {
		setPedidoState((prev) => {
			const novoPedido = [...prev];
			const item = novoPedido[index];

			if (item.quantidade > 1) {
				const novaQuantidade = item.quantidade - 1;
				novoPedido[index] = {
					...item,
					quantidade: novaQuantidade,
					precoTotal: novaQuantidade * item.precoUnitario,
				};
				return novoPedido;
			} else {
				return novoPedido.filter((_, i) => i !== index);
			}
		});
	};

	const handleAdd = (index: number) => {
		setPedidoState((prev) => {
			const novoPedido = [...prev];
			const item = novoPedido[index];
			const novaQuantidade = item.quantidade + 1;
			novoPedido[index] = {
				...item,
				quantidade: novaQuantidade,
				precoTotal: novaQuantidade * item.precoUnitario,
			};
			return novoPedido;
		});
	};

	return (
		<S.Container>
			<S.HeaderLine>
				<S.ReturnButton onClick={() => navigate(-1)}>
					<BiChevronLeft /> Voltar
				</S.ReturnButton>
				<Header />
			</S.HeaderLine>

			{pedidoState.length === 0 ? (
				<S.EmptyMessage>Nenhum item adicionado ainda.</S.EmptyMessage>
			) : (
				<S.List>
					{pedidoState.map((item, index) => (
						<S.ListItem key={index}>
							<div className="image-column">
								<img src={item.imagem} alt={item.nome} />
							</div>
							<div className="column">
								<div className="line-top">
									<S.ItemName>{item.nome}</S.ItemName>
									<S.ItemDetails>
										{item.sabores?.length && (
											<span className="flavor">Sabores: {item.sabores.join(', ')}</span>
										)}
										{item.adicionais && item.adicionais?.length > 0 && (
											<span className="additionals">
												Adicionais:
												{item.adicionais.map((a, idx) => (
													<span key={idx}>{a.nome}</span>
												))}
											</span>
										)}
									</S.ItemDetails>
								</div>
								<div className="line-bottom">
									<S.ItemPrice>R$ {item.precoTotal.toFixed(2).replace('.', ',')}</S.ItemPrice>
									<div className="buttons">
										<S.RemoveButton onClick={() => handleRemove(index)}>
											{item.quantidade > 1 ? <BiMinus /> : <BiTrash />}
										</S.RemoveButton>
										<span>{item.quantidade}</span>
										<S.AddButton onClick={() => handleAdd(index)}>
											<BiPlus />
										</S.AddButton>
									</div>
								</div>
							</div>
						</S.ListItem>
					))}
				</S.List>
			)}

			<S.TotalContainer>
				<div className="line-total">
					<span className="total">Total:</span>
					<span className="value">R$ {total.toFixed(2).replace('.', ',')}</span>
				</div>
				<div className="line-qtd">
					<span className="qtd">Quantidade de itens:</span>
					<span className="qtd">{quantidadeTotal}</span>
				</div>
			</S.TotalContainer>

			<S.ButtonsContainer>
				{pedidoState.length > 0 && (
					<S.PrimaryButton onClick={handleConfirm}>Registrar venda</S.PrimaryButton>
				)}
			</S.ButtonsContainer>

			<RegistroModal
				isOpen={isModalOpen}
				onClose={() => setModalOpen(false)}
				title={modalTitle}
				message={modalMessage}
			/>
		</S.Container>
	);
}
