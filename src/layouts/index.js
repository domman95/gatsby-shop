import React from "react"

import Header from "../components/Header"
import GlobalStyle from "../styles/GlobalStyle"
import styled from "styled-components"

const MainStyled = styled.main`
  padding-top: 60px;
  max-width: 1440px;
  margin: 0 auto;
`

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <MainStyled>{children}</MainStyled>
      <footer />
    </>
  )
}
