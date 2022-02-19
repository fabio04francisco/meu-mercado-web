import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: #ffffff;
    font-size: 16px;
    color: #8F8F8F;
  }

  button {
    cursor: pointer;
  }

`;
