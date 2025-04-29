import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.main`
	display: flex;
	align-items: center;
	flex-direction: column;
	padding: 25px 15px;
	gap: 1.5rem;
	width: 100%;
	height: 100%;
`;

export const Hello = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 25px;
	width: 100%;
	h1 {
		font-weight: 500;
		font-size: 20px;
		margin: 0;
		color: ${({ theme }) => theme.text};
	}
`;

export const ThemeButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 100px;
	border: none;
	padding: 4px;
	height: 30px;
	width: 30px;
	background-color: ${({ theme }) => theme.secondary};
	color: ${({ theme }) => theme.complementary};
	font-size: 20px;
	&:hover {
		background-color: #f3b84a;
	}
`;

export const CardBilling = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	flex-direction: column;
	background-color: ${({ theme }) => theme.primary};
	color: ${({ theme }) => theme.item};
	border-radius: 18px;
	width: 100%;
	height: 131px;
	gap: 10px;
	padding: 20px 0 18px 0;

	div {
		max-width: 200px;
	}
`;

export const Shortcuts = styled.section`
	display: grid;
	grid-template-columns: 1fr 1fr;
	justify-content: space-between;
	gap: 13px;
	width: 100%;
`;

export const Shortcut = styled(Link)`
	background-color: ${({ theme }) => theme.primary};
	color: ${({ theme }) => theme.text};
	border-radius: 8px;
	text-decoration: none;
	font-weight: 600;
	font-size: 12px;
	text-align: center;
	padding: 14px 10px 0 10px;

	.text {
		display: flex;
		justify-content: space-between;
	}

	img {
		max-width: 150px;
		margin-bottom: -3px;
	}
`;
