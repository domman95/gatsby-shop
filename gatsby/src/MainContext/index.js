import { check } from "prettier"
import React, { useState, useEffect } from "react"

const MainContext = React.createContext(null)

const MainProvider = ({ children }) => {
  const [shopCart, setShopCart] = useState([])

  const addToCart = (data) => {
    const id = data.id
    const checkDuplicate = shopCart.filter(item => item.id === id).length
    if (checkDuplicate >= 1) {
      alert("This article is already in your basket!")
      return
    }
    setShopCart([
      ...shopCart,
      {
        ...data,
      }])
  }

  useEffect(() => {
    if (shopCart.length > 0) {
      localStorage.setItem("shoppingCart", JSON.stringify(shopCart))
    }
    if (shopCart.length === 0) {
      const data = localStorage.getItem("shoppingCart")
      if (!data) return
      const lengthOfLocalStorage = JSON.parse(data).length
      if (lengthOfLocalStorage === 0) return
      if (lengthOfLocalStorage > 0) {
        setShopCart(JSON.parse(data))
      }
    }
  }, [shopCart])

  return (
    <MainContext.Provider
      value={{
        shopCart,
        setShopCart,
        addToCart,
      }}
    >
      {children}
    </MainContext.Provider>
  )
}

export default MainContext

export { MainProvider }
