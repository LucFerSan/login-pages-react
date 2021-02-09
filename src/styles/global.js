import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100vh;  
    display: flex;
    align-items: center;
    justify-content: center;
  }

  body {
    font-family: 'Inter', sans-serif;
    background: #1D7D8B;
  }

  button {
    cursor: pointer;
  }
`;
