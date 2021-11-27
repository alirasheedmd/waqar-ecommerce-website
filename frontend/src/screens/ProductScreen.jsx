import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
  Container,
} from "react-bootstrap"
import Rating from "../components/Rating"
import Message from "../components/Message"
import {
  createProductReview,
  listProductDetails,
} from "../actions/productAction"
import { addToCart } from "../actions/cartActions"
import { PRODUCT_CREATE_REVIEW_RESET } from "../constants/productContants"
import Meta from "../components/Meta"

const ProductScreen = ({ history, match }) => {
  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  const productReviewCreate = useSelector((state) => state.productReviewCreate)
  const { error: errorReviewCreate, success: successReviewCreate } =
    productReviewCreate

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const [qty, setQty] = useState(1)
  const [comment, setComment] = useState("")
  const [rating, setRating] = useState(0)
  const dispatch = useDispatch()

  useEffect(() => {
    if (successReviewCreate) {
      alert("Review Submitted")
      setRating(0)
      setComment("")
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET })
    } else {
      dispatch(listProductDetails(match.params.id))
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET })
    }
  }, [dispatch, match, successReviewCreate])

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty))
    history.push("/cart")
  }
  const review = { rating, comment }
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(createProductReview(review, match.params.id))
  }

  return (
    <Container>
      <Link className="btn btn-light" to="/">
        Go Back
      </Link>
      {loading ? (
        <h3>Loading...</h3>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <>
          <Meta title={product.name} description={product.description} />
          <Row className="py-3">
            <Col md={6}>
              <Image src={product.image} alt={product.name} fluid />
            </Col>
            <Col md={3}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>{product.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
                <ListGroup.Item>
                  Description: {product.description}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Row>
                      <Col>Price:</Col>
                      <Col>
                        <strong>${product.price}</strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Status:</Col>
                      <Col>
                        {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  {product.countInStock > 0 && (
                    <ListGroup.Item>
                      <Row>
                        <Col>Qty</Col>
                        <Col>
                          <Form.Control
                            as="select"
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                          >
                            {[...Array(product.countInStock).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
                          </Form.Control>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  )}
                  <ListGroup.Item>
                    <Button
                      onClick={addToCartHandler}
                      className="btn-block"
                      type="button"
                      disabled={product.countInStock === 0}
                    >
                      Add to Cart
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </>
      )}
    </Container>
  )
}

export default ProductScreen
