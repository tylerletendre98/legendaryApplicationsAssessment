import React from "react";
import RegisterForm from "../components/RegisterForm/RegisterForm";
import Subscription from "../components/Subscription/Subscription";

function RegisterPage(props) {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col"></div>
          <div className="col-12">
            <div>
              <RegisterForm setUser={props.setUser} />
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
      <div>
        <Subscription productList={props.productList} />
      </div>
    </div>
  );
}

export default RegisterPage;
