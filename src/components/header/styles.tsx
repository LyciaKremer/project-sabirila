import styled from 'styled-components';

export const Container = styled.header`
	background-color: ${({ theme }) => theme.background};
	position: relative;
	z-index: 10;
`;

export const Logo = styled.h1`
	font-size: 1.5rem;
	font-weight: bold;
	color: ${({ theme }) => theme.primary};
`;

export const Nav = styled.nav`
	display: flex;
	gap: 2rem;

	@media (max-width: 768px) {
		display: none;
	}
`;

export const NavLink = styled.a`
	text-decoration: none;
	color: ${({ theme }) => theme.text};
	font-weight: 500;

	&:hover {
		opacity: 0.7;
	}
`;

export const Hamburger = styled.button`
	background: none;
	border: none;
	cursor: pointer;
	border-radius: 100px;
	padding: 4px;
	height: 30px;
	width: 30px;
	background-color: ${({ theme }) => theme.secondary};
	color: ${({ theme }) => theme.complementary};
	font-size: 20px;

	@media (max-width: 768px) {
		display: block;
	}
`;

export const MobileMenu = styled.div`
	position: fixed;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	top: 79px;
  left: 0;
	height: calc(100vh - 80px);
	width: 100vw;
	z-index: 1;
	padding: 2rem 8vw;
	background-color: ${({ theme }) => theme.primary};

	a {
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
