import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux" // useSelector will display the products on the screen
import Product from "../components/Product"
import { listNewProducts } from "../actions/productAction"
import Message from "../components/Message"
import Loader from "../components/Loader"
import Meta from "../components/Meta"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

const NewArrivalProducts = () => {
  const dispatch = useDispatch()

  const productNewList = useSelector((state) => state.productNewList)
  const { loading, products, error } = productNewList

  useEffect(() => {
    dispatch(listNewProducts()) // this will fireoff the productAction.js (listProduct that will fetch data)
  }, [dispatch])

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  }

  return (
    <div className="product-page section-padding">
      <Meta />
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <section className="carosel-products">
            <div className="section-heading">
              <h3>New Arrival Products</h3>
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
              ssr={true} // means to render carousel on server-side.
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

export default NewArrivalProducts
