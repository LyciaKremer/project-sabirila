import styled from 'styled-components';

export const ReviewButton = styled.button`
	position: fixed;
	bottom: 0;
	padding: 15px;
	margin-bottom: 10px;
	font-size: 16px;
	font-weight: 500;
	border: none;
	border-radius: 8px;
	cursor: pointer;
	transition: background 0.3s;
	min-width: 288px;
	background-color: ${({ theme }) => theme.secondary};
	color: ${({ theme }) => theme.complementary};
	&:hover {
		background-color: #f3b84a;
	}
`;
