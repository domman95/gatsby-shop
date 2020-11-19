import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
  }

  :root {
      --montserrat: 'Montserrat', sans-serif;
      --roboto: 'Roboto', sans-serif;
      --regular: 400;
      --bold: 700;
      --mainColor: #1C042E;
      --pink: #AB528D;
      --white: #FFFFFF;
      --lightgrey: #C4C4C4;
      --radius: 4px;
  }

  body {
      background: var(--mainColor);
      font-family: var(--montserrat);
  }

  a {
    text-decoration: none;
  }

`

export default GlobalStyle
