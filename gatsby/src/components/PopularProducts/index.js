import React from "react"

import styled from "styled-components"

import Carousel from "react-elastic-carousel"
import Product from "components/Product"

const ProductsSectionStyled = styled.section`
  margin: 100px 0;

  .title {
    color: var(--white);
    font-weight: var(--bold);
    line-height: 34px;
    margin: 20px 0;
    font-size: ${({ theme }) => theme.small.xl};
    opacity: 0;
    transform: translateY(40%);
    animation: move .3s linear 2s forwards;
  }

  .paragraph {
    color: var(--lightgrey);
    line-height: 20px;
    margin-bottom: 64px;
    font-size: ${({ theme }) => theme.small.l};
    opacity: 0;
    transform: translateY(40%);
    animation: move .3s linear 2.3s forwards;
  }

  .title, .paragraph {
    text-align: center;
  }

  .container {
    opacity: 0;
    transform: translateY(40%);
    animation: move .6s linear 2.6s forwards;
  }

  @media (min-width: 768px) {
    margin: 100px 30px;

    .title {
      font-size: ${({ theme }) => theme.medium.l};
    }

    .title, .paragraph {
      text-align: left;
      padding-left: 93px;
    }
  }

  @keyframes move {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

`

export default function PopularProducts({ data }) {
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
      <div className="container">
        <Carousel breakPoints={breakPoints}>
          {data.map(item => <Product key={item.id} data={item} />)}
        </Carousel>
      </div>
    </ProductsSectionStyled>
  )
}
