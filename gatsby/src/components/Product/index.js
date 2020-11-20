import React from "react"
import { Link } from "gatsby"

import styled from "styled-components"
import MainContext from "MainContext"

const Article = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 265px;
  height: 270px;
  border-radius: 2px;
  border: 3px solid var(--productCardBorder);
  background: var(--productCardBgc);


  .image {
    padding: 30px 0 20px;
    text-align: center;
    transition: transform .1s;

    &:hover {
      transform: scale(1.1);
    }
  }

  .info {
    padding: 0 20px;

    .nameOfProduct {
      line-height: 22px;
      padding-bottom: 10px;
      color: var(--white);
    }      

    .details {
      padding-right: 30px;
      color: var(--lightgrey);
    }
  }

  .addToCart {
    position: absolute;
    right: 10px;
    bottom: 10px;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: none;
    background:var(--pink);
    color: var(--white);
    font-family: var(--roboto);
    font-weight: var(--bold);
    font-size: ${({ theme }) => theme.large.l};
    z-index: 1;
    cursor: pointer;

    &::hover {
      transform: scale(1.2);
    }
  }
`

export default function Product({ data }) {
  const { name, slug, excerpt, image } = data

  const context = React.useContext(MainContext)
  const { addToCart } = context

  return (
    <Article>
      <Link to={`/${slug.current}`}>
        <div className="image">
          <img src={image.asset.fluid.src} alt={slug.current} />
        </div>
        <div className="info">
          <h3 className="nameOfProduct">{name}</h3>
          <p className="details">{excerpt}</p>
        </div>
      </Link>
      <button className="addToCart" onClick={() => addToCart(data)}>+</button>
    </Article>
  )
}
