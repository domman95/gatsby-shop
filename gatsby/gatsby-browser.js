import React from "react"
import { MainProvider } from "./src/MainContext"
import Layout from "./src/layouts"

export function wrapPageElement({ element, props }) {
    return (
        <MainProvider>
            <Layout {...props}>
                {element}
            </Layout>
        </MainProvider>
    )
}