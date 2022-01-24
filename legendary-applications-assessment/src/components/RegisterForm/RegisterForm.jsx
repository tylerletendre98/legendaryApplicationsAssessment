import React from "react";
import { useState } from "react";

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
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col"></div>
          <div className="col-6">
            <div class="form-floating">
              <input
                type="text"
                class="form-control"
                id="floatingInputGrid"
                placeholder="Username"
                value=""
              />
              <label for="floatingInputGrid">Username</label>
            </div>
            <div class="form-floating">
              <input
                type="email"
                class="form-control"
                id="floatingInputGrid"
                placeholder="Enter Email"
                value=""
              />
              <label for="floatingInputGrid">Email</label>
            </div>
            <div class="form-floating">
              <input
                type="password"
                class="form-control"
                id="floatingInputGrid"
                placeholder="Create Password"
                value=""
              />
              <label for="floatingInputGrid">Password</label>
            </div>
            <div className="container">
              <div className="row">
                <div className="col">
                  <div class="form-floating">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingInputGrid"
                      placeholder="Enter Firstname"
                      value=""
                    />
                    <label for="floatingInputGrid">First Name</label>
                  </div>
                </div>
                <div className="col">
                  <div class="form-floating">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingInputGrid"
                      placeholder="Enter Lastname"
                      value=""
                    />
                    <label for="floatingInputGrid">Last Name</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="form-floating">
              <input
                type="text"
                class="form-control"
                id="floatingInputGrid"
                placeholder="Enter Address"
                value=""
              />
              <label for="floatingInputGrid">Address</label>
            </div>
            <div className="container">
              <div className="row">
                <div className="col">
                  <div class="form-floating">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingInputGrid"
                      placeholder="Enter City"
                      value=""
                    />
                    <label for="floatingInputGrid">City</label>
                  </div>
                </div>
                <div className="col">
                  <div class="form-floating">
                    <select
                      class="form-select"
                      id="floatingSelectGrid"
                      aria-label="Floating label select example"
                    >
                      <option selected></option>
                      <option value="1">United States</option>
                      <option value="2">Canada</option>
                      <option value="3">Mexico</option>
                    </select>
                    <label for="floatingSelectGrid">Select Your Country</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="form-floating">
              <input
                type="text"
                class="form-control"
                id="floatingInputGrid"
                placeholder="Enter Home phone number"
                value=""
              />
              <label for="floatingInputGrid">Home Phone</label>
            </div>
            <div class="form-floating">
              <input
                type="text"
                class="form-control"
                id="floatingInputGrid"
                placeholder="Enter Mobile phone number"
                value=""
              />
              <label for="floatingInputGrid">Mobile Phone</label>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
