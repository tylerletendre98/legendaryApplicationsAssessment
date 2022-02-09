import React, { useState } from "react";
import RegisterForm from "../components/RegisterForm/RegisterForm";
import Subscription from "../components/Subscription/Subscription";
import "./registerPage.css";

function RegisterPage(props) {
  const [userInfo, setUserInfo] = useState();

  // this creates the user object from the register form component and subscription components
  const createUserObject = (subscriptionLevel) => {
    const user = {
      userName: userInfo.userName,
      email: userInfo.email,
      password: userInfo.password,
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      address: userInfo.address,
      city: userInfo.city,
      country: userInfo.country,
      homePhone: userInfo.homePhone,
      mobilePhone: userInfo.mobilePhone,
      subscriptionLevel: subscriptionLevel,
    };
    props.setUser(user);
    alert("Thankyou for creating a account!");
    console.log(user);
  };

  if (userInfo === undefined) {
    return (
      <div className="registerpage-container">
        <div>
          <RegisterForm setUser={props.setUser} setUserInfo={setUserInfo} />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="subscriptionpage-container">
          <Subscription
            productList={props.productList}
            createUserObject={createUserObject}
            discountedProductList={props.discountedProductList}
          />
        </div>
      </div>
    );
  }
}

export default RegisterPage;
