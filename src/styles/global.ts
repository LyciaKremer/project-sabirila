import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: sans-serif;
    transition: all 0.25s ease-in-out;
  }
`;