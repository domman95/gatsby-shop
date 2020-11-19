import React, { useRef, useState, useEffect } from "react"

import styled from "styled-components"
import { useSpring, animated } from "react-spring"
import MainContext from "MainContext"

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(28, 4, 46, 0.55);
  backdrop-filter: blur(6px);
`

const ShoppingCart = styled.div`
  position: relative;
  position: absolute;
  top: 60px;
  right: 40px;
  width: 281px;
  height: 276px;
  border: 2px solid #F5F5F5;
  background: #220538;

  .submit {
    position: absolute;
    bottom: 20px;
    right: 20px;
    border: none;
    font-family: var(--roboto);
    font-weight: var(--bold);
    color: var(--white);
    font-size: 14px; // 12px is too small in my opinion
    background: var(--pink);
    padding: 6px 16px;
    cursor: pointer;
    border-radius: 4px;
    text-transform: uppercase;
  }

  ul {
    padding: 0 20px 0 10px;
    overflow-y: auto;
    max-height: 70%;

    .empty {
      color: var(--white);
      padding: 20px 0;
      text-align: center;
      font-size: 16px;
    }

    li {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 28px;
    margin: 10px 0;

    .productImage {
      height: 100%;
      width: 30px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .productName, .price {
      white-space: nowrap;
      color: #eeeeee;
      font-size: 12px;
    }

    .productName {
      text-transform: uppercase;
      flex: 5;
      padding-left: 10px;
      font-weight: var(--bold);
    }

    .price {
      font-family: var(--roboto);
      flex: 1;
    }
  }
  }

`

export default function ShoppingCartModal({ open, setIsModal }) {
  const [productList, setShopCart] = useState([])

  const modalRef = useRef()

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setIsModal(false)
    }
  }

  const animationProps = useSpring(
    {
      opacity: open ? 1 : 0,
      transform: open ? "translateX(0)" : "translateX(100%)",
    })
  const context = React.useContext(MainContext)
  const { shopCart } = context

  useEffect(() => {
    setShopCart(shopCart)
  }, [shopCart])

  return (
    <>
      {open &&
        <Container ref={modalRef} onClick={closeModal}>
          <animated.div style={animationProps}>
            <ShoppingCart>
              <ul>
                {productList.map(({ id, image, name, price }) => (
                  <li key={id}>
                    <div className="productImage">
                      <img src={image.asset.fluid.src} alt="" />
                    </div>
                    <h3 className="productName">{name}</h3>
                    <p className="price">${price / 100}</p>
                  </li>
                ))}
              </ul>
              <button className="submit" onClick={() => setIsModal(!open)}>Submit</button>
            </ShoppingCart>
          </animated.div>
        </Container>}
    </>
  )
}
