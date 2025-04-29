import styled, { css } from 'styled-components';

export const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	margin-bottom: 1rem;
`;

export const TabWrapper = styled.div`
	position: relative;
	display: flex;
	background-color: ${({ theme }) => theme.tab};
	border-radius: 999px;
	width: 288px;
`;

interface ActiveIndicatorProps {
	active: 'comidas' | 'bebidas';
}

export const ActiveIndicator = styled.span<ActiveIndicatorProps>`
	position: absolute;
	width: 144px;
	height: 40px;
	font-size: 14px;
	border-radius: 999px;
	background-color: ${({ theme }) => theme.secondary};
	transition: transform 0.3s ease;

	&:hover {
		background-color: #f3b84a;
	}

	${(props) =>
		props.active === 'bebidas' &&
		css`
			transform: translateX(100%);
		`}
`;

interface TabButtonProps {
	isActive: boolean;
}

export const TabButton = styled.button<TabButtonProps>`
	position: relative;
	z-index: 1;
	width: 288px;
	height: 40px;
	border: none;
	background: transparent;
	border-radius: 999px;
	font-weight: 500;
	font-size: 14px;
	font-weight: 500;
	color: ${(props) =>
		props.isActive ? ({ theme }) => theme.complementary : ({ theme }) => theme.tabText};
	cursor: pointer;
	transition: color 0.3s ease;
`;
