import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Roboto:wght@700&display=swap');

  * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-family: 'Montserrat', sans-serif;
  }

  :root {
      --roboto: 'Roboto', sans-serif;
      --regular: 400;
      --bold: 700;
      --mainColor: #1C042E;
      --pink: #AB528D;
      --white: #FFFFFF;
      --lightgrey: #C4C4C4;
  }

  body {
      background: var(--mainColor);
  }

  a {
    text-decoration: none;
  }

`

export default GlobalStyle
