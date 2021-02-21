import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

  :root {
    font-size: 100%;
  }

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
    background: #eee;
  }

  button {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    :root {
      font-size: 87.5%;
    }
  }
`;
