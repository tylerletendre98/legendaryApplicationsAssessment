import React from "react";
import Subscription from "../components/Subscription/Subscription";
import "./subscriptionPage.css";

function SubscriptionPage(props) {
  return (
    <div>
      <div className="subscription-page-title">
        <h2>Select a subscription below</h2>
      </div>
      <Subscription productList={props.productList} />
    </div>
  );
}

export default SubscriptionPage;
