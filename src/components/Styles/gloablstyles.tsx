import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    font-family: ${({ theme }) => theme.fonts[0] || theme.fonts[1]};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  button {
    outline:none;
    border:none;
    cursor: pointer;
  }

  li {
    list-style: none;
  }
`;

export default GlobalStyle;
