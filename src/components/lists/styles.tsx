import styled from 'styled-components';

export const List = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 10px;
	gap: 1.5rem;
	max-width: 1000px;
	border-radius: 8px;
	height: 100%;
	width: 100%;
	margin-bottom: 25px;
`;

export const Item = styled.div`
	display: flex;
	justify-content: space-between;
	background-color: ${({ theme }) => theme.primary};
	border-radius: 8px;
	width: 100%;
	height: 100px;

	h3 {
		margin: 0;
		font-size: 12px;
		font-weight: 500;
		color: ${({ theme }) => theme.text};
	}

	p {
		margin: 0;
		font-size: 10px;
		font-weight: 500;
		color: ${({ theme }) => theme.description};
	}

	img {
		background-color: ${({ theme }) => theme.background};
		border-radius: 8px;
		margin: 10px;
		height: 80px;
		width: 80px;
	}

	button {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		background-color: ${({ theme }) => theme.secondary};
		border: none;
		border-radius: 0 8px 8px 0;
		color: ${({ theme }) => theme.complementary};
		font-size: 24px;
		cursor: pointer;

		&:hover {
			background-color: #f3b84a;
		}
	}

	span {
		font-size: 14px;
		font-weight: 500;
		color: ${({ theme }) => theme.text};
	}

	.content {
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		padding: 10px 0;
	}
	.description {
		display: flex;
		flex-direction: column;
		gap: 5px;
	}

	.column {
		display: flex;
	}
`;
