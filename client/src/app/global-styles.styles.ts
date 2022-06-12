import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;800&display=swap');
  *{
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Nunito', sans-serif;
  }
`;
