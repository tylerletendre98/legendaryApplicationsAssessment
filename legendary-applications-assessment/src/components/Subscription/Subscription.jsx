import React, { useState } from "react";
import "./subscription.css";

function Subscription(props) {
  const [discounted, setDiscounted] = useState(false);
  const [discountCode, setDiscountCode] = useState("");

  const handleSubmit = () => {
    if (discountCode === "12345") {
      setDiscounted(!discounted);
    } else {
      alert("Invalid Code try again");
    }
  };

  if (discounted === false) {
    return (
      <div>
        <div className="map-container">
          {props.productList.map((product) => {
            return (
              <div className="product-container">
                <div>
                  <div className="product-name">
                    <h3>{product.name}</h3>
                  </div>
                  <div>
                    <p>{product.description}</p>
                  </div>
                  <div>
                    <p>Duration: {product.subscriptionLength}</p>
                  </div>
                  <div className="product-price">
                    <h4>${product.price}</h4>
                  </div>
                </div>
                <div className="subscription-button">
                  <button>Subscribe</button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="discount-box">
          <div className="discount-box-title">
            <h3>Do you have a discount code?</h3>
          </div>
          <div className="discount-input">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="floatingInputGrid"
                placeholder="Enter Lastname"
                value={discountCode}
                onChange={(e) => setDiscountCode(e.target.value)}
              />
              <label htmlFor="floatingInputGrid">Enter discount code</label>
            </div>
            <div className="discount-button">
              <button onClick={handleSubmit}>Submit Code</button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="map-container">
        {props.productList.map((product) => {
          return (
            <div className="product-container">
              <div>
                <div className="product-name">
                  <h3>{product.name}</h3>
                </div>
                <div>
                  <p>{product.description}</p>
                </div>
                <div>
                  <p>Duration: {product.subscriptionLength}</p>
                </div>
                <div className="product-price">
                  <h4>${product.price * 0.95}</h4>
                </div>
              </div>
              <div className="subscription-button">
                <button>Subscribe</button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Subscription;
