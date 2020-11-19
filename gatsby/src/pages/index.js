import React from "react"

import SEO from "../components/SEO"
import Hero from "../components/Hero"
import PopularProducts from "../components/PopularProducts"
import { graphql } from "gatsby"
import Layout from "../layouts"

export default function IndexPage({ data }) {
  const dumies = data.dumies.nodes
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <PopularProducts data={dumies} />
    </Layout>
  )
}

export const query = graphql`
  query DumyQuery {
    dumies: allSanityDumy {
    nodes {
      name
      id
      image {
        asset {
          fluid(maxWidth: 640) {
            ...GatsbySanityImageFluid
          }
        }
      }
      description
      excerpt
      slug {
        current
      }
      tags
      price
    }
  }
  }
`
