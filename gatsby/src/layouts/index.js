import React from "react"

import Header from "components/Header"
import GlobalStyle from "styles/GlobalStyle"
import styled, { ThemeProvider } from "styled-components"
import MainContext from "MainContext"
import { typography } from "styles/Typography"

const MainStyled = styled.main`
  padding-top: 60px;
  max-width: var(--siteWidth);
  margin: 0 auto;
  overflow: hidden;
  position: relative;
`

export default function Layout({ children }) {
  return (
    <MainContext.Consumer>
      {
        (props) => (
          <ThemeProvider theme={typography}>
            <GlobalStyle />
            <Header />
            <MainStyled>{children}</MainStyled>
            <footer />
          </ThemeProvider>)
      }
    </MainContext.Consumer>
  )
}
