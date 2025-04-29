import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.background};
  }
  
  #root {
    display: flex;
    font-family: "Inter", sans-serif;
    width: 100%;
  }
`;
