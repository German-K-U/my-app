import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <h1>Привет это  моя вторая страница</h1>
    <p>Здесь я изучаю новые для себя технологии</p>
    <Link to="/">возвращайся обратно!</Link>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default SecondPage
