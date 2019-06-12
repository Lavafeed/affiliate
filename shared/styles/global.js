import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    background-color: #F7F7F7;
  }
  * {
    -webkit-box-sizing: inherit;
    box-sizing: inherit;
    padding: 0;
    margin: 0;
  }
  *::before,
  *::after {
    -webkit-box-sizing: inherit;
    box-sizing: inherit;
  }
  img {
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }
  a {
    text-decoration: none;
    cursor: pointer;
  }
  button {
    outline: 0;
    border: 0;
    cursor: pointer;
    background-color: #fff;
  }
  .scroll,
  .scroll * {
    pointer-events: none !important;
  }
  .locked {
    
  }
  input[type='password']:not(:placeholder-shown) {
    font-family: caption;
  }
`;
