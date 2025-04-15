import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.main`
  padding: 2rem;
  display: grid;
  gap: 1.5rem;
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