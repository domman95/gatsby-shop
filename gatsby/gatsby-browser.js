import React from "react"
import { MainProvider } from "./src/MainContext"

export function wrapPageElement({ element, props }) {
  return (
    <MainProvider {...props}>
      {element}
    </MainProvider>
  )
}
