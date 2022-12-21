import { createGlobalStyle } from 'styled-components';

const globals = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: 'Montserrat', BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-color: #edede9;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Montserrat;
  }
`;

export default globals;
