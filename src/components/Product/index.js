import React from "react"
import { Link } from "gatsby"

import styled from "styled-components"

import dumy from "../../assets/products/dumy.svg"

const Article = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 265px;
  height: 273px;
  border-radius: 2px;
  border: 3px solid #969393;
  background: #331f41;

  .image {
    padding: 30px 0 20px;
    text-align: center;
  }

  .info {
    padding: 0 20px;

    .nameOfProduct {
      line-height: 22px;
      padding-bottom: 10px;
      color: white;
    }      

    .details {
      padding-right: 30px;
      color: #c4c4c4;
    }
  }

  .addToCart {
    position: absolute;
    right: 10px;
    bottom: 10px;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: none;
    background:#AB528D;
    color: white;
    font-family: var(--roboto);
    font-weight: var(--bold);
    font-size: 32px;
    z-index: 1;
  }
`

export default function Product() {

  return (
    <Article>
      <Link to="/">
        <div className="image">
          <img src={dumy} alt="" />
        </div>
        <div className="info">
          <h3 className="nameOfProduct">GREAT DUMMY</h3>
          <p className="details">Something that you trully need, but haven’t know about it yet</p>
        </div>
      </Link>
      <button className="addToCart" onClick={() => console.log("ok")}>+</button>
    </Article>
  )
}
