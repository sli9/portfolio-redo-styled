import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    font-family: Oswald, Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${theme.colors.text};
  }
  
  a {
    text-decoration: none;
    color: unset;
  }
  
  ul {
    list-style: none;
  }
  
  button {
    background-color: unset;
    border: unset;
    cursor: pointer;
  }
  
  section {
    padding: 50px 0;
  }
  section:nth-child(odd) {
    background-color: ${theme.colors.firstBg};
  }
  section:nth-child(even) {
    background-color: ${theme.colors.secondBg};
  }
  
  h3 {
    font-family: Poppins, sans-serif;
    font-size: 20px;
  }
  
  p {
    font-family: Poppins, sans-serif;
  }
    `