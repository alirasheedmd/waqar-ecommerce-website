import React from "react"
import { Container, Image } from "react-bootstrap"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div id="footer">
      <footer id="large-screen">
        <Container className="body section-padding">
          <div className="flex-display py-3">
            <div className="flex-display direction-col about">
              <img
                src="https://res.cloudinary.com/magwatt/image/upload/v1628076626/logo_trace-removebg-preview_lnl1ty.png"
                className="logo"
              />
              <div>
                <p>Buy wide range of products from top brands.</p>
              </div>
              <div>
                <img src="https://res.cloudinary.com/magwatt/image/upload/v1628077291/payment-methods_w37pyh.png" />
              </div>
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
    </div>
  )
}

export default Footer
