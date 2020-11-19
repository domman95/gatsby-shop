import React from "react"

import styled from "styled-components"

const ButtonStyled = styled.button`
    position: relative;
    background: var(--pink);
    border: none;
    color: var(--white);
    padding: 10px 23px;
    margin-top: 30px;
    border-radius: var(--radius);
    font-size: 13px;
    cursor: pointer;
    font-weight: var(--bold);
    opacity: ${({ hero }) => hero ? 0 : 1};
    animation: showButton .3s linear 1.6s forwards;
    outline: none;

    &::before {
      content: '';
      position: absolute;
      top: -6px;
      left: -6px;
      width: 0;
      height: 0;
      border-left: 2px solid white;
      border-top: 2px solid white;
      border-top-left-radius: var(--radius);
      transition: .3s;
      visibility: hidden;
    }

    &:hover::before,
    &:focus::before {
      width: 15%;
      height: 50%;
      visibility: visible;
    }

    &::after {
      content: '';
      position: absolute;
      bottom: -6px;
      right: -6px;
      width: 0;
      height: 0;
      border-right: 2px solid white;
      border-bottom: 2px solid white;
      border-bottom-right-radius: var(--radius);
      transition: .3s;
      visibility: hidden;
    }

    &:hover::after,
    &:focus::after {
      width: 15%;
      height: 50%;
      visibility: visible;
    }

    @media (min-width: 768px) {
      transform: ${({ hero }) => hero ? "translateX(-30%)" : "translateX(0)"};
    }

    @keyframes move {
        to {
        opacity: 1;
        transform: translateX(0);
        }
    }

    @keyframes showButton {
        to {
        opacity: 1;
        }
    }
`

export default function Button({ children, onClick = null, hero }) {
  return (
    <ButtonStyled onClick={onClick} hero={hero}>
      {children}
    </ButtonStyled>
  )
}
