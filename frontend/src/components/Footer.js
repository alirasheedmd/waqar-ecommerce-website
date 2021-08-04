import React from "react"
import { Container, Row, Col, Form } from "react-bootstrap"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div id="footer">
      <footer id="large-screen">
        <Container className="body">
          <div className="flex-display py-3">
            <div className="flex-display direction-col">
              <div className="footer-heading">Logo</div>
              <div>Buy wide range of products from top brands.</div>
              <div></div>
              <div></div>
            </div>
            <div className="flex-display direction-col">
              <div className="footer-heading">Quick Links</div>

              <div></div>
              <div></div>
            </div>
            <div className="flex-display direction-col">
              <div className="footer-heading">Contact</div>
              <div></div>
              <div></div>
            </div>
            <div className="flex-display direction-col grow-2">
              <div className="footer-heading">
                <p>Subscribe To Our Weekly Newsletter</p>
              </div>
              <div>
                <span>For Latest News and Offers</span>
              </div>
              <div>
                <Form>
                  <Form.Group>
                    <Form.Control
                      type="text"
                      placeholder="Email Address"
                      className="news"
                    />
                  </Form.Group>
                </Form>
              </div>
            </div>
          </div>
        </Container>
      </footer>
      <footer id="small-screen">
        <div className="footer-icons-list">
          <div className="item">
            <Link to="/">
              <i className="footer-icon fas fa-home"></i>
              <br />
              <span className="item-text">Home</span>
            </Link>
          </div>
          <div className="item">
            <Link to="/cart">
              <i className="footer-icon fas fa-shopping-bag"></i>
              <br />
              <span className="item-text">Shop</span>
            </Link>
          </div>
          <div className="item">
            <Link to="/offer">
              <i className="footer-icon fas fa-tag"></i>
              <br />
              <span className="item-text">Offers</span>
            </Link>
          </div>
          <div className="item">
            <Link to="/profile">
              <i className=" footer-icon far fa-user-circle"></i>
              <br />
              <span className="item-text">Me</span>
            </Link>
          </div>
          <div className="item">
            <Link to="/stores">
              <i className=" footer-icon fas fa-store"></i>
              <br />
              <span className="item-text">Stores</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
