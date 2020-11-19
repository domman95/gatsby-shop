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
  padding: 17px;
  z-index: 1;


  @media (min-width: 430px) {
    padding: 17px 97px 17px 57px;
  }

  a {
    color: var(--white);
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

  .count {
    position: absolute;
    bottom: -5px;
    right: -5px;
    display: ${({ count }) => count > 0 ? "flex" : "none"};
    justify-content: center;
    align-items: center;
    color: var(--white);
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #301346;
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
