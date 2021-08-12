import React from "react"
import "./Footer.scss"
import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div id="footer">
      <Container className="landing">
        <div className="flex-display footer-brand">
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
              <Link to="/" className="page">
                Home
              </Link>
            </div>
            <div className="link">
              <Link to="/pages/61150b40dc594249d4bad720" className="page">
                About Us
              </Link>
            </div>
            <div className="link">
              <Link to="/terms" className="page">
                Terms and Condition
              </Link>
            </div>
            <div className="link">
              <Link to="/privacy" className="page">
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
                Santa fe NM USA
                <br />
                Email: waqar.ahmed@dimsstore.com
                <br />
                Website: https://www.dimsstore.com/ <br />
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
    </div>
  )
}

export default Footer
