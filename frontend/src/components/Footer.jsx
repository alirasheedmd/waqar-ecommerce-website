import React from "react"
import "./footer.scss"
import { Container, Image } from "react-bootstrap"
import { Link } from "react-router-dom"
import shipping from "../images/features/shipping.svg"
import quality from "../images/features/quality.svg"
import discount from "../images/features/discount.svg"
import secure from "../images/features/secure.svg"

const Footer = () => {
  return (
    <div id="footer">
      <footer id="large-screen">
        <Container className="body">
          <div className="flex-display features">
            <div className="flex-display item">
              <img src={shipping} />
              <div className="flex-display direction-col item-text">
                <div className="title">
                  <h4>Worldwide Shipping</h4>
                </div>
                <div className="body">
                  We ship internationally to most countries and foreign
                  territories.
                </div>
              </div>
            </div>
            <div className="flex-display item">
              <img src={quality} />
              <div className="flex-display direction-col item-text">
                <div className="title">
                  <h4>Best Quality</h4>
                </div>
                <div className="body">
                  Our company is known for its high-quality and durable
                  products.
                </div>
              </div>
            </div>
            <div className="flex-display item">
              <img src={discount} />
              <div className="flex-display direction-col item-text">
                <div className="title">
                  <h4>Secure Payments</h4>
                </div>
                <div className="body">We offer best discounts and promos.</div>
              </div>
            </div>
            <div className="flex-display item">
              <img src={secure} />
              <div className="flex-display direction-col item-text">
                <div className="title">
                  <h4>Discounts</h4>
                </div>
                <div className="body">
                  Our site uses high-level SSL encryption technology.
                </div>
              </div>
            </div>
          </div>
          <hr
            style={{
              color: "#fff",
              backgroundColor: "#fff",
              height: 0.5,
              borderColor: "#fff",
            }}
          />
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
