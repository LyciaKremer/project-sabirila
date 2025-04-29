import { Comida } from '../../data/products';
import * as S from './styles';
import { BiPlus } from 'react-icons/bi';

type FoodListProps = {
	produtos: Comida[];
	onAdd: (item: Comida) => void;
};

export function FoodList({ produtos, onAdd }: FoodListProps) {
	return (
		<S.List>
			{produtos.map((produto) => (
				<S.Item key={produto.id}>
					<div className="column">
						<img src={produto.imagem} alt="Pastel" />
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
