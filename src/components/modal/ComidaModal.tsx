import { useState } from 'react';
import { Comida } from '../../data/products';
import * as S from './styles';
import { BiPlus, BiMinus } from 'react-icons/bi';

interface Props {
	item: Comida;
	onAdd: (itemCustomizado: {
		sabores: string[];
		adicionais: { nome: string; preco: number }[];
	}) => void;
	onClose: () => void;
}

export default function ComidaModal({ item, onAdd, onClose }: Props) {
	const [saboresSelecionados, setSaboresSelecionados] = useState<string[]>([]);
	const [adicionaisSelecionados, setAdicionaisSelecionados] = useState<
		{ nome: string; preco: number }[]
	>([]);

	const tipo = item.tipo;
	const limiteSabores = tipo === '3em1' ? 3 : tipo === '2em1' ? 2 : tipo === 'tradicional' ? 1 : 0;

	const toggleSabor = (sabor: string) => {
		if (saboresSelecionados.includes(sabor)) {
			setSaboresSelecionados((prev) => prev.filter((s) => s !== sabor));
		} else if (saboresSelecionados.length < limiteSabores) {
			setSaboresSelecionados((prev) => [...prev, sabor]);
		}
	};

	const toggleAdicional = (adicional: { nome: string; preco: number }) => {
		setAdicionaisSelecionados((prev) =>
			prev.find((a) => a.nome === adicional.nome)
				? prev.filter((a) => a.nome !== adicional.nome)
				: [...prev, adicional]
		);
	};

	const saboresValidos = saboresSelecionados.length === limiteSabores;
	const adicionais = item.adicionais.map((nome) => ({ nome, preco: 1 }));

	return (
		<S.Overlay>
			<S.ModalContainer>
				<S.Banner>
					<img src={item.imagem} alt="Pastel" />
				</S.Banner>
				<S.Title>{item.nome}</S.Title>

				{limiteSabores > 0 && (
					<>
						<S.SubTitle>
							Selecione ao menos {limiteSabores} sabor{limiteSabores > 1 ? 'es' : ''} para
							continuar:
						</S.SubTitle>
						<S.Category>Sabores</S.Category>
						<S.List>
							{item.sabores.map((sabor) => {
								const selecionado = saboresSelecionados.includes(sabor);
								const limiteAtingido = saboresSelecionados.length >= limiteSabores;

								return (
									<S.ListItem key={sabor}>
										<S.ItemName selecionado={selecionado} limiteAtingido={limiteAtingido}>
											{sabor}
										</S.ItemName>

										<S.ToggleButton
											onClick={() => toggleSabor(sabor)}
											disabled={!selecionado && limiteAtingido}
										>
											{selecionado ? <BiMinus /> : <BiPlus />}
										</S.ToggleButton>
									</S.ListItem>
								);
							})}
						</S.List>
					</>
				)}

				{adicionais.length > 0 && (
					<>
						<S.Category>Adicionais:</S.Category>
						<S.List>
							{adicionais.map((adicional) => {
								const selecionado = adicionaisSelecionados.find((a) => a.nome === adicional.nome);

								return (
									<S.ListItem key={adicional.nome}>
										<div className="container">
											<S.ItemName selecionado={!!selecionado} limiteAtingido={false}>
												{adicional.nome}
											</S.ItemName>
											<span className="description-item">R$1,00</span>
										</div>
										<S.ToggleButton onClick={() => toggleAdicional(adicional)}>
											{selecionado ? <BiMinus /> : <BiPlus />}
										</S.ToggleButton>
									</S.ListItem>
								);
							})}
						</S.List>
					</>
				)}

				<S.Actions>
					<S.ActionButton onClick={onClose} variant="secondary">
						Cancelar
					</S.ActionButton>
					{saboresValidos && (
						<S.ActionButton
							onClick={() =>
								onAdd({ sabores: saboresSelecionados, adicionais: adicionaisSelecionados })
							}
						>
							Adicionar item
						</S.ActionButton>
					)}
				</S.Actions>
			</S.ModalContainer>
		</S.Overlay>
	);
}
