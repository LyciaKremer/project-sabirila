import { Bebida } from '../../data/products';
import * as S from './styles';
import { BiPlus } from 'react-icons/bi';

type DrinkListProps = {
	produtos: Bebida[];
	onAdd: (item: Bebida) => void;
};

export function DrinkList({ produtos, onAdd }: DrinkListProps) {
	return (
		<S.List>
			{produtos.map((produto) => (
				<S.Item key={produto.id}>
					<div className="column">
						<img src={produto.imagem} alt="Bebida" />
						<div className="content">
							<div className="description">
								<h3>{produto.nome}</h3>
								<p>{produto.descricao}</p>
							</div>
							<span>R${produto.precoBase},00</span>
						</div>
					</div>
					<button onClick={() => onAdd(produto)}>
						<BiPlus />
					</button>
				</S.Item>
			))}
		</S.List>
	);
}
