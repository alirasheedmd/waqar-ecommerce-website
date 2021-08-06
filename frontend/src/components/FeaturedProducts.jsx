import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux" // useSelector will display the products on the screen
import Product from "../components/Product"
import { Row, Col } from "react-bootstrap"
import { listFeaturedProducts } from "../actions/productAction"
import Message from "../components/Message"
import Loader from "../components/Loader"
import Meta from "../components/Meta"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import "./FeaturedProducts.scss"

const FeaturedProducts = () => {
  const dispatch = useDispatch()

  const productFeaturedList = useSelector((state) => state.productFeaturedList)
  const { loading, products, error } = productFeaturedList

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 6,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  }

  useEffect(() => {
    dispatch(listFeaturedProducts()) // this will fireoff the productAction.js (listProduct that will fetch data)
  }, [dispatch])

  return (
    <div className="product-page">
      <Meta />
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <section className="feature-products">
            <div className="section-heading">
              <h3>Feature Products</h3>
            </div>
            <hr
              style={{
                color: "#b4df99",
                backgroundColor: "#b4df99",
                height: 0.5,
                width: "90%",
                margin: "auto",
              }}
            />
            <Carousel
              swipeable={true}
              draggable={true}
              showDots={true}
              responsive={responsive}
              ssr={false} // means to render carousel on server-side.
              infinite={true}
              autoPlaySpeed={1000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              {products.map((product) => (
                <div className="feature-product">
                  <Product product={product} />
                </div>
              ))}
            </Carousel>
          </section>
        </>
      )}
    </div>
  )
}

export default FeaturedProducts
