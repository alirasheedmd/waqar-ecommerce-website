import React from "react"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div id="footer">
      <footer id="large-screen" className="section-padding">
        <Container className="body">
          <div className="flex-display py-3">
            <div className="flex-display direction-col">
              <div className="footer-heading">Logo</div>
              <div>Buy wide range of products from top brands.</div>
              <div></div>
              <div></div>
            </div>
            <div className="flex-display direction-col pages">
              <div className="footer-heading">Quick Links</div>
              <div className="link">
                <Link to="/admin" className="page">
                  Home
                </Link>
              </div>
              <div className="link">
                <Link to="/" className="page">
                  About Us
                </Link>
              </div>
              <div className="link">
                <Link to="/" className="page">
                  Terms and Condition
                </Link>
              </div>
              <div className="link">
                <Link to="/" className="page">
                  Privacy and Policy
                </Link>
              </div>
            </div>
            <div className="flex-display direction-col contact">
              <div className="footer-heading">Contact</div>
              <div className="contact-body">
                <p>
                  DIM Store
                  <br />
                  Suit A504
                  <br />
                  Saima Drive Inn <br />
                  Gulshan-e-Iqbal
                  <br />
                  Karachi <br />
                  Pakistan <br />
                  Phone: <br />
                  Email: <br />
                  Website: <br />
                </p>
              </div>
              <div></div>
            </div>
            <div className="flex-display direction-col subscribe">
              <div className="footer-heading">
                <p>Subscribe To Our Weekly Newsletter</p>
              </div>
              <div>
                <span>For Latest News and Offers</span>
              </div>
              <div>
                <form>
                  <input type="text" placeholder="Email Address" />
                  <input type="submit" value="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </Container>
        <div className="copyright">
          <p>Copyright © 2021 DIMS Store | All Rights Reserved.</p>
        </div>
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
