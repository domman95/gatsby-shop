import React from "react"

import styled from "styled-components"
import Carousel from "react-elastic-carousel"
import Product from "../Product"

const ProductsSectionStyled = styled.section`
  margin: 100px 0;

  .title {
    color: white;
    font-weight: var(--bold);
    line-height: 34px;
    margin: 20px 0;
    font-size: 18px;
  }

  .paragraph {
    color: #C4C4C4;
    line-height: 20px;
    margin-bottom: 64px;
    font-size: 16px;
  }

  .title, .paragraph {
    text-align: center;
  }

  @media (min-width: 768px) {
    margin: 100px 30px;

    .title {
      font-size: 28px;
    }

    .title, .paragraph {
      text-align: left;
      padding-left: 93px;
    }
  }

`

export default function PopularProducts() {
  const breakPoints = [
    { width: 320, itemsToShow: 1 },
    { width: 580, itemsToShow: 2 },
    { width: 840, itemsToShow: 3 },
    { width: 1140, itemsToShow: 4 },
  ]

  return (
    <ProductsSectionStyled>
      <h2 className="title">Explore community choices</h2>
      <p className="paragraph">Updated daily based on most popular choices among dev community</p>
      <Carousel breakPoints={breakPoints}>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </Carousel>
    </ProductsSectionStyled>
  )
}