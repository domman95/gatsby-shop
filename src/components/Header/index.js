import React from "react"

import { Link } from "gatsby"
import styled from "styled-components"
import shoppingCart from "../../assets/elements/shopping_cart.svg"

const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 17px;
  z-index: 999;


  @media (min-width: 430px) {
    padding: 17px 97px 17px 57px;
  }

  a {
    color: white;
    text-decoration: none;
    font-weight: var(--bold);
    font-size: 22px;
  }
`

const ShoppingCartButton = styled.button`
  position: relative;
  background: url(${shoppingCart}) no-repeat center/cover;
  width: 30px;
  height: 26px;
  border: none;
  cursor: pointer;
`

export default function Header() {
  return (
    <HeaderStyled>
      <Link to="/">JAM SHOP</Link>
      <ShoppingCartButton />
    </HeaderStyled>
  )
}
