import React from "react";
import { useState } from "react";
import "./registerForm.css";
import FormHeader from "../FormHeader/FormHeader";

function RegisterForm(props) {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [homePhone, setHomePhone] = useState("");
  const [mobilePhone, setMobilePhone] = useState("");

  //this takes in all infomation from the inputs and creates the userInfo object and sets that in the registerpage file
  const handleSubmit = (e) => {
    if (
      userName.length > 0 &&
      email.length > 0 &&
      password.length > 0 &&
      firstName.length > 0 &&
      lastName.length > 0 &&
      address.length > 0 &&
      city.length > 0 &&
      country.length > 0 &&
      homePhone.length > 0 &&
      mobilePhone.length > 0
    ) {
      const newAccount = {
        userName: userName,
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
        address: address,
        city: city,
        country: country,
        homePhone: homePhone,
        mobilePhone: mobilePhone,
      };
      props.setUserInfo(newAccount);
    } else {
      alert("Infomation missing!");
    }
  };

  return (
    <div className>
      <FormHeader />
      <div className="input-container">
        <div className="input-lable">
          <label>Username</label>
        </div>
        <div>
          <input
            type="text"
            placeholder="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="input-container">
        <div className="input-lable">
          <label>Email</label>
        </div>
        <div>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div className="input-container">
        <div className="input-lable">
          <label>Password</label>
        </div>
        <div>
          <input
            type="password"
            placeholder="Create Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="input-container-small">
              <div className="input-lable">
                <label>First Name</label>
              </div>
              <div className="form-floating">
                <input
                  type="text"
                  placeholder="Enter Firstname"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="input-container-small">
              <div>
                <label htmlFor="floatingInputGrid" className="input-lable">
                  Last Name
                </label>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Enter Lastname"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="input-container">
        <div>
          <label htmlFor="floatingInputGrid" className="input-lable">
            Address
          </label>
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="input-container-small">
              <div>
                <label className="input-lable">City</label>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Enter City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="input-container">
              <div className="input-lable">
                <label htmlFor="floatingSelectGrid">Select Your Country</label>
              </div>
              <div>
                <select
                  onChange={(e) => setCountry(e.target.value)}
                  value={country}
                >
                  <option defaultValue={""}></option>
                  <option value="Unitied States">United States</option>
                  <option value="Canada">Canada</option>
                  <option value="Mexico">Mexico</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="input-container">
        <div className="input-lable">
          <label htmlFor="floatingInputGrid">Home Phone</label>
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter Home phone number"
            value={homePhone}
            onChange={(e) => setHomePhone(e.target.value)}
          />
        </div>
      </div>
      <div className="input-container">
        <div className="input-lable">
          <label htmlFor="floatingInputGrid">Mobile Phone</label>
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter Mobile phone number"
            value={mobilePhone}
            onChange={(e) => setMobilePhone(e.target.value)}
          />
        </div>
      </div>
      <div className="register-button">
        <button onClick={() => handleSubmit()}>Next Step</button>
      </div>
    </div>
  );
}

export default RegisterForm;
