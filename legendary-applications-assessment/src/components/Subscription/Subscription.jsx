import React, { useState } from "react";
import "./subscription.css";

function Subscription(props) {
  const [discounted, setDiscounted] = useState(false);
  const [discountCode, setDiscountCode] = useState("");
  const [currentSubscription, setCurrentSubscription] = useState(0);

  //this lets the user get a discount if they enter the code of 12345
  const handleSubmit = () => {
    if (discountCode === "12345") {
      setDiscounted(!discounted);
    } else {
      alert("Invalid Code try again");
    }
  };

  const nextSubscription = () => {
    if (currentSubscription < props.productList.length - 1) {
      setCurrentSubscription(currentSubscription + 1);
      console.log(currentSubscription);
    } else if (currentSubscription === props.productList.length - 1) {
      setCurrentSubscription(0);
    }
  };

  const lastSubscription = () => {
    if (currentSubscription > 0) {
      setCurrentSubscription(currentSubscription - 1);
    } else if (currentSubscription === 0) {
      setCurrentSubscription(props.productList.length - 1);
    }
  };

  //this sets the subscription level of the user as well as sets the user object
  const handleChoice = (userChoice) => {
    switch (userChoice) {
      case 0:
        if (discounted === false) {
          props.createUserObject(props.productList[userChoice]);
        } else {
          props.createUserObject(props.discountedProductList[userChoice]);
        }
        break;
      case 1:
        if (discounted === false) {
          props.createUserObject(props.productList[userChoice]);
        } else {
          props.createUserObject(props.discountedProductList[userChoice]);
        }
        break;
      case 2:
        if (discounted === false) {
          props.createUserObject(props.productList[userChoice]);
        } else {
          props.createUserObject(props.discountedProductList[userChoice]);
        }
        break;
    }
  };

  if (discounted === false) {
    return (
      <div className="product-wheel">
        <div className="product-header">
          <h2>Please select a Subscription Level</h2>
        </div>
        <div className="map-container">
          <div className="next-subscription-button">
            <button onClick={lastSubscription}>Last subscription</button>
          </div>
          <div className="product-container">
            <div>
              <div className="product-name">
                <h3>{props.productList[currentSubscription].name}</h3>
              </div>
              <div>
                <p>{props.productList[currentSubscription].description}</p>
              </div>
              <div>
                <p>
                  Duration:{" "}
                  {props.productList[currentSubscription].subscriptionLength}
                </p>
              </div>
              <div className="product-price">
                <h4>${props.productList[currentSubscription].price}</h4>
              </div>
            </div>
            <div className="subscription-button">
              <button
                onClick={() =>
                  handleChoice(props.productList[currentSubscription].id)
                }
              >
                Subscribe
              </button>
            </div>
          </div>
          <div className="next-subscription-button">
            <button onClick={nextSubscription}>Next subscription</button>
          </div>
        </div>
        <div className="discount-box">
          <div className="discount-box-title">
            <h3>Do you have a discount code?</h3>
          </div>
          <div className="discount-input">
            <input
              type="text"
              placeholder="Enter discount code"
              value={discountCode}
              onChange={(e) => setDiscountCode(e.target.value)}
            />
          </div>
          <div className="discount-button">
            <button onClick={handleSubmit}>Submit Code</button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="product-wheel">
        <div className="product-header">
          <h2>Please select a Subscription Level</h2>
        </div>
        <div className="map-container">
          <div className="next-subscription-button">
            <button onClick={lastSubscription}>Last subscription</button>
          </div>
          <div className="product-container">
            <div>
              <div className="product-name">
                <h3>{props.discountedProductList[currentSubscription].name}</h3>
              </div>
              <div>
                <p>
                  {props.discountedProductList[currentSubscription].description}
                </p>
              </div>
              <div>
                <p>
                  Duration:{" "}
                  {
                    props.discountedProductList[currentSubscription]
                      .subscriptionLength
                  }
                </p>
              </div>
              <div className="product-price">
                <h4>
                  ${props.discountedProductList[currentSubscription].price}
                </h4>
              </div>
            </div>
            <div className="subscription-button">
              <button
                onClick={() =>
                  handleChoice(
                    props.discountedProductList[currentSubscription].id
                  )
                }
              >
                Subscribe
              </button>
            </div>
          </div>
          <div className="next-subscription-button">
            <button onClick={nextSubscription}>Next subscription</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Subscription;
