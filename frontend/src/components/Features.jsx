import React from "react"
import "./Features.scss"
import shipping from "../images/features/shipping.svg"
import quality from "../images/features/quality.svg"
import discount from "../images/features/discount.svg"
import secure from "../images/features/secure.svg"
import { Container } from "react-bootstrap"

const Features = () => {
  return (
    <div id="features" className="full-width">
      <Container className="landing">
        <div className="flex-display features">
          <div className="flex-display item">
            <div className="item-image">
              <img src={shipping} alt="World Wide Shipping" />
            </div>
            <div className="flex-display direction-col item-text">
              <div className="title">
                <h4>Worldwide Shipping</h4>
              </div>
              <div className="body-text">
                We ship internationally to most countries and foreign
                territories.
              </div>
            </div>
          </div>
          <div className="flex-display item">
            <img src={quality} alt="Best Quality" />
            <div className="flex-display direction-col item-text">
              <div className="title">
                <h4>Best Quality</h4>
              </div>
              <div className="body-text">
                Our company is known for its high-quality and durable products.
              </div>
            </div>
          </div>
          <div className="flex-display item">
            <img src={discount} alt="Secure Payment" />
            <div className="flex-display direction-col item-text">
              <div className="title">
                <h4>Secure Payments</h4>
              </div>
              <div className="body-text">
                We offer best discounts and promos.
              </div>
            </div>
          </div>
          <div className="flex-display item">
            <img src={secure} alt="Discounts" />
            <div className="flex-display direction-col item-text">
              <div className="title">
                <h4>Discounts</h4>
              </div>
              <div className="body-text">
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
      </Container>
    </div>
  )
}

export default Features
