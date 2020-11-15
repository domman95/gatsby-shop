import React from "react"

import styled from "styled-components"

import HeroBackground from "../../assets/elements/hero_background.svg"
import HeroImage from "../../assets/elements/monitor.svg"
import HeroDecor from "../../assets/elements/hero_decor.svg"

const SectionStyled = styled.section`
  display: grid;
  gap: 50px;
  margin-top: 60px;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const HeroBackgroundStyled = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  max-width: 50%;
  z-index: -1;
`

const HeroImageStyled = styled.div`
  display: grid;
  justify-items: center;
  justify-self: center;

  img {
    max-width: 60%;

    @media (min-width: 768px) {
      max-width: 80%;
    }

    @media (min-width: 1180px) {
      max-width: 100%;
    }
  }
`

const HeroTextStyled = styled.div`
    display: grid;
    justify-items: center;
    position: relative;
    justify-self: center;

    @media (min-width: 768px) {
      justify-items: left;
    }

    &::before {
      content: url(${HeroDecor});
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(80%, -80%) scale(.4);

      @media (min-width: 1180px) {
        transform: translate(80%, -80%) scale(1);
      }
    }

    h1 {
      color: white;
      font-family: Georgia, serif;
      font-size: 24px;

      @media (min-width: 768px) {
        font-size: 30px;
      }

      @media (min-width: 1180px) {
        font-size: 48px;
      }
    }

    button {
      background: #AB528D;
      border: none;
      color: white;
      padding: 10px 23px;
      margin-top: 30px;
      border-radius: 4px;
      font-size: 13px;
      cursor: pointer;
      font-weight: var(--bold);

      @media (min-width: 768px) {
        transform: translateX(-30%);
      }
    }
`

function HomepageHero() {
  return (
    <SectionStyled>
      <HeroImageStyled>
        <img src={HeroImage} alt="Vector Monitor" />
      </HeroImageStyled>
      <HeroTextStyled>
        <h1>
          Don't waste time
          <br />
          on boring things
        </h1>
        <button>GO EXPLORE</button>
      </HeroTextStyled>
      <HeroBackgroundStyled src={HeroBackground} />
    </SectionStyled>
  )
}

export default HomepageHero
