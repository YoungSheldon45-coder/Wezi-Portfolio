import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    background-color: #ffffff;
    color: #333333;
    line-height: 1.6;
    font-size: 16px;
  }

  a {
    color: #333333;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  a:hover {
    color: #555555;
  }

  h1, h2, h3 {
    font-weight: 600;
  }
`;

export default GlobalStyles;
