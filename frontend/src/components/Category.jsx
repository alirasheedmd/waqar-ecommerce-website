import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import "./Category.scss"

const Category = () => {
  return (
    <Row id="category">
      <Col xs={12} md={8}>
        <Row className="category-grid-wrapper">
          <Col md={12}>
            <div className="category-card-wrapper">
              <div className="category-card-1">
                <h4 className="">Card 1</h4>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="category-card-wrapper">
              <div className="category-card-2">
                <h4 className="">Card 1</h4>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="category-card-wrapper">
              <div className="category-card-3">
                <h4 className="">Card 1</h4>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="category-card-wrapper">
              <div className="category-card-4">
                <h4 className="">Card 1</h4>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="category-card-wrapper">
              <div className="category-card-5">
                <h4 className="">Card 1</h4>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="category-card-wrapper">
              <div className="category-card-6">
                <h4 className="">Card 1</h4>
              </div>
            </div>
          </Col>
        </Row>
      </Col>
      <Col xs={6} md={4}>
        <div className="category-card category-card-7">
          <h2 className="">Pet Supplies</h2>
        </div>
        <div className="category-card category-card-8">
          <h2 className="">Pet Supplies</h2>
        </div>
        <div className="category-card category-card-9">
          <h2 className="">Pet Supplies</h2>
        </div>
      </Col>
    </Row>
  )
}

export default Category
