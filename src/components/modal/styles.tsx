import styled, { css } from 'styled-components';

export const Overlay = styled.div`
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	background: rgba(0, 0, 0, 0.4);
	z-index: 100;
	inset: 0;
`;

export const ModalContainer = styled.div`
	background-color: ${({ theme }) => theme.primary};
	padding: 13px 10px;
	border-radius: 12px;
	width: 90%;
	max-width: 500px;
	height: 100%;
	overflow-y: auto;
	max-height: 90vh;
`;

export const ModalContainerMenssage = styled.div`
	display: flex;
	text-align: center;
	flex-direction: column;
	background-color: ${({ theme }) => theme.primary};
	padding: 13px 10px;
	border-radius: 12px;
	width: 80%;
	max-width: 500px;
	height: fit-content;
	overflow-y: auto;
	max-height: 90vh;
`;

export const Banner = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${({ theme }) => theme.background};
	border-radius: 8px;
	margin: 0 0 11px 0;
	height: 80px;
`;

export const Title = styled.h2`
	font-size: 16px;
	font-weight: 500;
	color: ${({ theme }) => theme.text};
	margin: 0 0 5px 0;
`;

export const SubTitle = styled.p`
	font-size: 10px;
	font-weight: 500;
	color: ${({ theme }) => theme.description};
	margin: 0;
`;

export const Category = styled.h4`
	font-size: 14px;
	font-weight: 500;
	color: ${({ theme }) => theme.category};
	margin: 20px 0 11px 0;
`;

export const List = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
	overflow-y: auto;
	max-height: 40%;
	padding-right: 5px;

	@media (max-width: 768px) {
		max-height: 25%;
	}
`;

export const ListItem = styled.li`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 8px;

	.container {
		display: flex;
		flex-direction: column;
		gap: 5px;

		.description-item {
			font-size: 10px;
			font-weight: 500;
			color: ${({ theme }) => theme.description};
		}
	}
`;

interface ItemNameProps {
	selecionado: boolean;
	limiteAtingido: boolean;
}

export const ItemName = styled.span<ItemNameProps>`
	flex: 1;
	font-size: 12px;
	font-weight: ${(props) => (props.selecionado ? 'bold' : 'normal')};
	color: ${(props) => {
		if (props.selecionado) return ({ theme }) => theme.item;
		if (props.limiteAtingido) return '#aaa';
		return ({ theme }) => theme.item;
	}};
`;

export const ToggleButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 30px;
	height: 30px;
	font-weight: bold;
	font-size: 16px;
	border: none;
	background-color: ${({ theme }) => theme.secondary};
	color: ${({ theme }) => theme.complementary};
	border-radius: 4px;
	cursor: pointer;
	transition: background 0.2s;

	&:hover:not(:disabled) {
		background-color: #f3b84a;
	}

	&:disabled {
		cursor: not-allowed;
		opacity: 0.5;
	}
`;

export const Actions = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-top: 2rem;
	gap: 1rem;
`;

interface ActionButtonProps {
	variant?: 'primary' | 'secondary';
}

export const ActionButton = styled.button<ActionButtonProps>`
	padding: 15px;
	font-size: 16px;
	font-weight: 500;
	border: none;
	border-radius: 8px;
	cursor: pointer;
	transition: background 0.3s;
	width: 100%;

	${(props) =>
		props.variant === 'secondary'
			? css`
					background-color: transparent;
					color: ${({ theme }) => theme.complementary};
					border: 1px solid ${({ theme }) => theme.complementary};
					&:hover {
						background-color: #f3b84a;
					}
				`
			: css`
					background-color: ${({ theme }) => theme.secondary};
					color: ${({ theme }) => theme.complementary};
					&:hover {
						background-color: #f3b84a;
					}
				`}
`;
