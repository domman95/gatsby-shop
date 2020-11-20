import React, { useState, useEffect } from "react"

import { Link } from "gatsby"
import styled from "styled-components"
import shoppingCart from "assets/elements/shopping_cart.svg"
import ShoppingCartModal from "components/ShoppingCartModal"
import MainContext from "MainContext"

const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  z-index: 10;


  @media (min-width: 430px) {
    padding: 15px 95px 15px 55px;
  }

  a {
    color: var(--white);
    text-decoration: none;
    font-weight: var(--bold);
    font-size: ${({ theme }) => theme.medium.s};
  }
`

const ShoppingCartButton = styled.button`
  position: relative;
  background: url(${shoppingCart}) no-repeat center/cover;
  width: 30px;
  height: 25px;
  border: none;
  cursor: pointer;

  .count {
    position: absolute;
    bottom: -5px;
    right: -5px;
    display: ${({ count }) => count > 0 ? "flex" : "none"};
    justify-content: center;
    align-items: center;
    color: var(--white);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: var(--shopCartCount);
  }
`

export default function Header() {
  const [isModal, setIsModal] = useState(false)
  const [count, setCount] = useState(0)

  const toggleShoppingCart = () => {
    if (count === 0) return
    setIsModal(!isModal)
  }

  const context = React.useContext(MainContext)
  const { shopCart } = context

  useEffect(() => {
    setCount(shopCart.length)
  }, [shopCart])

  return (
    <HeaderStyled>
      <Link to="/">JAM SHOP</Link>
      <ShoppingCartButton onClick={toggleShoppingCart} count={count}>
        <div className="count">{count}</div>
      </ShoppingCartButton>
      <ShoppingCartModal open={isModal} setIsModal={setIsModal} />
    </HeaderStyled>
  )
}
