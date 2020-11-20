import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
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
      --productCardBgc: #331f41;
      --productCardBorder: #969393;
      --shopCartCount: #301346;
      --shopCartBgc: #220538;
      --shopCartBorder: #F5F5F5;
      --radius: 4px;
      --siteWidth: 1440px;
      --h1fontS: 24px;
      --h1fontM: 30px;
      --h1fontL: 48px;
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
