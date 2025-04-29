import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100vh;
	background-color: ${({ theme }) => theme.background};
	padding: 25px 16px 13px 16px;
`;

export const EmptyMessage = styled.p`
	color: #666;
`;

export const List = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 13px;
	padding: 0;
	width: 100%;
`;

export const ListItem = styled.li`
	display: flex;
	background-color: ${({ theme }) => theme.primary};
	border-radius: 8px;
	padding: 10px;

	img {
		background-color: ${({ theme }) => theme.background};
		border-radius: 8px;
		height: 80px;
		width: 80px;
		margin-right: 13px;
	}

	.image-column {
		display: flex;
		align-items: flex-start;
	}

	.column {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		flex-direction: column;
		width: 100%;
	}

	.line-top {
		display: flex;
		flex-direction: column;
		width: 100%;
	}

	.line-bottom {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		width: 100%;

		.buttons {
			display: flex;
			align-items: center;
			border-radius: 4px;
			background-color: ${({ theme }) => theme.background};
			color: ${({ theme }) => theme.text};
			font-size: 12px;
			gap: 15px;
		}
	}
`;

export const ItemName = styled.p`
	margin: 0;
	font-size: 14px;
	font-weight: 500;
	color: ${({ theme }) => theme.text};
`;

export const ItemDetails = styled.p`
	font-size: 12px;
	color: ${({ theme }) => theme.description};
	margin-top: 0.25rem;
	.flavor,
	.additionals {
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
		color: ${({ theme }) => theme.description};

		span {
			margin-left: 10px;
		}
	}
`;

export const ItemPrice = styled.span`
	font-size: 14px;
	font-weight: 500;
	color: ${({ theme }) => theme.text};
	margin-top: 0.25rem;
`;

export const RemoveButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	border: none;
	background-color: ${({ theme }) => theme.danger};
	color: ${({ theme }) => theme.primary};
	font-size: 14px;
	border-radius: 4px;
	padding: 4px;
	cursor: pointer;
	&:hover {
		text-decoration: underline;
		background-color: #ad2518;
	}
`;

export const AddButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	border: none;
	background-color: ${({ theme }) => theme.secondary};
	color: ${({ theme }) => theme.complementary};
	font-size: 14px;
	border-radius: 4px;
	padding: 4px;
	cursor: pointer;
	&:hover {
		text-decoration: underline;
		background-color: #f3b84a;
	}
`;

export const TotalContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 1rem;
	gap: 6px;

	.line-total,
	.line-qtd {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		width: 100%;
	}

	.total {
		font-weight: 500;
		font-size: 16px;
		color: ${({ theme }) => theme.text};
	}

	.value {
		font-weight: 600;
		font-size: 20px;
		color: ${({ theme }) => theme.text};
	}

	.qtd {
		font-weight: 500;
		font-size: 16px;
		color: ${({ theme }) => theme.item};
	}
`;

export const ButtonsContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	gap: 1rem;
	margin-top: 25px;
`;

export const PrimaryButton = styled.button`
	background-color: ${({ theme }) => theme.secondary};
	color: ${({ theme }) => theme.complementary};
	padding: 15px;
	border-radius: 0.5rem;
	font-weight: 500;
	font-size: 16px;
	border: none;
	width: 100%;
	cursor: pointer;
	margin-bottom: 20px;
	&:hover {
		background-color: #f3b84a;
	}
`;

export const HeaderLine = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	margin-bottom: 27px;
`;

export const ReturnButton = styled.button`
	display: flex;
	align-items: center;
	background: none;
	border: none;
	color: ${({ theme }) => theme.text};
	font-size: 20px;
	cursor: pointer;
	padding: 0;
`;
