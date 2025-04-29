import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
	width: 100vw;
	background-color: ${({ theme }) => theme.secondary};
	animation: ${fadeIn} 1s ease-in;

	&.fade-out {
		animation: ${fadeOut} 1s ease-out forwards;
	}
`;

export const Logo = styled.img`
	width: 200px;
	height: auto;
`;
