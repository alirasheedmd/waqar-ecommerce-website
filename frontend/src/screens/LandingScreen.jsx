import React from "react"
import "./LandingScreen.scss"
import { Container } from "react-bootstrap"
import Meta from "../components/Meta"
import Features from "../components/Features"
import Category from "../components/Category"
import FeaturedProducts from "../components/FeaturedProducts"
import NewArrivalProducts from "../components/NewArrivalProducts"

const LandingScreen = () => {
  return (
    <>
      <div className="landing-page">
        <Meta />
        <Container className="landing">
          <Category />
          <FeaturedProducts />
          <NewArrivalProducts />
        </Container>
      </div>
      <Features />
    </>
  )
}

export default LandingScreen
