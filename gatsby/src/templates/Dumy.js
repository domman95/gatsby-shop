import React from "react"
import { graphql } from "gatsby"

import styled from "styled-components"

const Container = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 0;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  .image {
    width: 25%;
    img {
      width: 100%;
    }
  }

  .aboutProduct {
    font-family: var(--roboto);
    padding: 20px;
    max-width: 500px;
    
    .tag {
      color: #FBE067;
      font-size: 14px;
      text-transform: uppercase;
      padding: 15px 0;
    }

    .title {
      color: #eeeeee;
      font-size: 32px;
    }

    .description {
      color: #c4c4c4;
      font-size: 18px;
      padding: 10px 0 20px;
    }

    .price {
      color: #eeeeee;
      font-weight: var(--bold);
      font-size: 22px;
    }

    .addToCart {
      font-weight: var(--bold);
      color: white;
      border: none;
      border-radius: 4px;
      background: #AB528D;
      padding: 12px 32px;
      text-transform: uppercase;
      font-size: 13px;
      margin: 20px 0 0;
    }
  }

`

export default function SingleDumyPage({data: {dumy}}) {
  const { name, image, tags, description, price, slug } = dumy;

  return (
    <Container>
      <div className="image">
        <img src={image.asset.fluid.src} alt={slug.current} />
      </div>
      <div className="aboutProduct">
        <p className="tag">{tags}</p>
        <h2 className="title">{name}</h2>
        <p className="description">{description}</p>
        <p className="price">${price / 100}</p>
        <button className="addToCart">Add To Cart</button>
      </div>
    </Container>
  )
}

export const query = graphql`
  query($slug: String!) {
    dumy: sanityDumy(slug: { current: { eq: $slug } }) {
      name
      id
      image {
        asset {
          fluid(maxWidth: 640) {
            ...GatsbySanityImageFluid
          }
        }
      }
      tags
      description
      price
      slug {
        current
      }
    }
  }
`