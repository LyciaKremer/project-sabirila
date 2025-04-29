import { useNavigate } from 'react-router-dom';
import { ItemPedido } from '../../hooks/useComanda';
import * as S from './styles';

interface ReviewButtonProps {
	pedido: ItemPedido[];
}

export default function ReviewButton({ pedido }: ReviewButtonProps) {
	const navigate = useNavigate();
	const total = pedido.reduce((acc, item) => acc + item.precoTotal, 0);

	const handleClick = () => {
		navigate('/revisar', { state: { pedido } });
	};

	return (
		<S.ReviewButton onClick={handleClick}>
			Revisar pedido ({pedido.length}) - R$ {total.toFixed(2).replace('.', ',')}
		</S.ReviewButton>
	);
}
