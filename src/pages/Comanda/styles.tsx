import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.main`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 25px 15px;
	gap: 1.5rem;
	width: 100%;
	height: 100%;
`;

export const HeaderLine = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
`;

export const Shortcut = styled(Link)`
	padding: 1rem 1.5rem;
	background-color: ${({ theme }) => theme.text};
	color: ${({ theme }) => theme.background};
	border-radius: 8px;
	text-decoration: none;
	font-weight: bold;
	text-align: center;
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
