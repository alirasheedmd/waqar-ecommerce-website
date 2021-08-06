import React, { useEffect } from "react"
import "./LandingScreen.scss"
import { useDispatch, useSelector } from "react-redux" // useSelector will display the products on the screen
import Product from "../components/Product"
import { Row, Col, Container, Image } from "react-bootstrap"
import { listProducts } from "../actions/productAction"
import Message from "../components/Message"
import Loader from "../components/Loader"
import Meta from "../components/Meta"
import { Link } from "react-router-dom"
import Features from "../components/Features"
import Category from "../components/Category"
import Products from "../components/Products"

const LandingScreen = () => {
  return (
    <>
      <div className="landing-page">
        <Meta />
        <Container className="body">
          <Category />
        </Container>
      </div>
      <Features />
    </>
  )
}

export default LandingScreen
