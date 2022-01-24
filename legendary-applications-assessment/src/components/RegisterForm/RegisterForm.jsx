import React from "react";
import { useState } from "react";
import "./registerForm.css";

function RegisterForm() {
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

  const handleSubmit = (e) => {
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
    console.log(newAccount);
  };

  return (
    <div className="form-container">
      <div className="container">
        <div className="row">
          <div className="col"></div>
          <div className="col-9">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="floatingInputGrid"
                placeholder="Username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <label htmlFor="floatingInputGrid">Username</label>
            </div>
            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                id="floatingInputGrid"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="floatingInputGrid">Email</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingInputGrid"
                placeholder="Create Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="floatingInputGrid">Password</label>
            </div>
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInputGrid"
                      placeholder="Enter Firstname"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                    <label htmlFor="floatingInputGrid">First Name</label>
                  </div>
                </div>
                <div className="col">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInputGrid"
                      placeholder="Enter Lastname"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                    <label htmlFor="floatingInputGrid">Last Name</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="floatingInputGrid"
                placeholder="Enter Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <label htmlFor="floatingInputGrid">Address</label>
            </div>
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInputGrid"
                      placeholder="Enter City"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                    <label htmlFor="floatingInputGrid">City</label>
                  </div>
                </div>
                <div className="col">
                  <div className="form-floating">
                    <select
                      className="form-select"
                      id="floatingSelectGrid"
                      aria-label="Floating label select example"
                      onChange={(e) => setCountry(e.target.value)}
                      value={country}
                    >
                      <option defaultValue={""}></option>
                      <option value="Unitied States">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="Mexico">Mexico</option>
                    </select>
                    <label htmlFor="floatingSelectGrid">
                      Select Your Country
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="floatingInputGrid"
                placeholder="Enter Home phone number"
                value={homePhone}
                onChange={(e) => setHomePhone(e.target.value)}
              />
              <label htmlFor="floatingInputGrid">Home Phone</label>
            </div>
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="floatingInputGrid"
                placeholder="Enter Mobile phone number"
                value={mobilePhone}
                onChange={(e) => setMobilePhone(e.target.value)}
              />
              <label htmlFor="floatingInputGrid">Mobile Phone</label>
            </div>
            <button onClick={handleSubmit}>Create Account</button>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
