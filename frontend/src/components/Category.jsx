import React from "react"
import { Col, Image, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./Category.scss"

const Category = () => {
  return (
    <div id="category">
      <Row>
        <Col xs={12} md={9}>
          <Row className="category-grid-wrapper">
            <Col md={12}>
              <div className="category-card-wrapper">
                <Link to={`/search/category/Pet`} className="link">
                  <div className="category-card-1">
                    <div className="card-items-wrapper flex-display sa center">
                      <div className="card-text-wrap">
                        <h5 className="card-text-wrap-pitch">Shop</h5>
                        <h1 className="card-text-wrap-title">Pet Supplies</h1>
                      </div>

                      <Image
                        src="https://res.cloudinary.com/magwatt/image/upload/v1628150517/petfood_f507yp.png"
                        className="card-image"
                      />
                    </div>
                  </div>
                </Link>
              </div>
            </Col>
            <Col md={6}>
              <div className="category-card-wrapper">
                <Link to={`/search/category/Kitchen`} className="link">
                  <div className="category-card-2">
                    <div className="card-items-wrapper flex-display jcc direction-col">
                      <div className="card-text-wrap">
                        <h5 className="card-text-wrap-pitch">Shop</h5>
                        <h1 className="card-text-wrap-title">
                          Kitchen and Dining
                        </h1>
                      </div>

                      <Image
                        src="https://res.cloudinary.com/magwatt/image/upload/v1628155107/kitchen-items_d6fkof.png"
                        className="card-image"
                      />
                    </div>
                  </div>
                </Link>
              </div>
            </Col>
            <Col md={6}>
              <div className="category-card-wrapper">
                <Link to={`/search/category/Tools`} className="link">
                  <div className="category-card-3">
                    <div className="card-items-wrapper flex-display jcc direction-col">
                      <div className="card-text-wrap">
                        <h5 className="card-text-wrap-pitch">Shop</h5>
                        <h1 className="card-text-wrap-title">Tools</h1>
                      </div>

                      <Image
                        src="https://res.cloudinary.com/magwatt/image/upload/v1628155107/tools_je9iis.png"
                        className="card-image"
                      />
                    </div>
                  </div>
                </Link>
              </div>
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={3} className="aside">
          <div className="aside-wrapper">
            <div className="category-card-wrapper">
              <Link to={`/search/category/outdoor`} className="link">
                <div className="category-card-7">
                  <div className="card-items-wrapper flex-display jcc direction-col">
                    <div className="card-text-wrap">
                      <h5 className="card-text-wrap-pitch">Shop</h5>
                      <h1 className="card-text-wrap-title">
                        Garden <br /> and Outdoor
                      </h1>
                    </div>

                    <Image
                      src="https://res.cloudinary.com/magwatt/image/upload/v1628756013/Screen_Shot_2021-08-12_at_1.10_yidrva.png"
                      className="card-image"
                    />
                  </div>
                </div>
              </Link>
            </div>
            <div className="category-card-wrapper">
              <Link to={`/search/category/Baby`} className="link">
                <div className="category-card-8">
                  <div className="card-items-wrapper flex-display jcc direction-col">
                    <div className="card-text-wrap">
                      <h5 className="card-text-wrap-pitch">Shop</h5>
                      <h1 className="card-text-wrap-title">Baby</h1>
                    </div>

                    <Image
                      src="https://res.cloudinary.com/magwatt/image/upload/v1628760283/4efdf0d377180a1553eeaaf548eab043_xoubuv.png"
                      className="card-image"
                    />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={3}>
          <div className="category-card-wrapper">
            <Link to={`/search/category/Beauty`} className="link">
              <div className="category-card category-card-4">
                <div className="card-items-wrapper flex-display jcc direction-col">
                  <div className="card-text-wrap">
                    <h5 className="card-text-wrap-pitch">Shop</h5>
                    <h1 className="card-text-wrap-title">
                      Beauty <br /> Care
                    </h1>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </Col>
        <Col md={3}>
          <div className="category-card-wrapper">
            <Link to={`/search/category/Office`} className="link">
              <div className="category-card-5">
                <div className="category-card card-items-wrapper flex-display jcc direction-col">
                  <div className="card-text-wrap">
                    <h5 className="card-text-wrap-pitch">Shop</h5>
                    <h1 className="card-text-wrap-title">
                      Office
                      <br /> Supplies
                    </h1>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </Col>
        <Col md={3}>
          <div className="category-card-wrapper">
            <Link to={`/search/category/Fitness`} className="link">
              <div className="category-card category-card-6">
                <div className="card-items-wrapper flex-display jcc direction-col">
                  <div className="card-text-wrap">
                    <h5 className="card-text-wrap-pitch">Shop</h5>
                    <h1 className="card-text-wrap-title">Fitness</h1>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </Col>
        <Col md={3}>
          <div className="category-card-wrapper">
            <Link to={`/search/category/Electronic`} className="link">
              <div className="category-card category-card-9">
                <div className="card-items-wrapper flex-display jcc direction-col">
                  <div className="card-text-wrap">
                    <h5 className="card-text-wrap-pitch">Shop</h5>
                    <h1 className="card-text-wrap-title">Electronics</h1>
                  </div>

                  <Image
                    src="https://res.cloudinary.com/magwatt/image/upload/v1628155107/kitchen-items_d6fkof.png"
                    className="card-image"
                  />
                </div>
              </div>
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Category
