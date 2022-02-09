import "./App.css";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import Header from "./components/Header/header";
import { useState } from "react";

function App() {
  const [user, setUser] = useState();

  console.log(user);

  const productList = [
    {
      id: 0,
      name: "Basic",
      description: "This is a basic membership",
      price: 15,
      subscriptionLength: "6 months",
    },
    {
      id: 1,
      name: "Gold",
      description: "This is a gold membership",
      price: 40,
      subscriptionLength: "1 year",
    },
    {
      id: 2,
      name: "Premium",
      description: "This is a premium membership",
      price: 200,
      subscriptionLength: "Life",
    },
  ];

  const discountedProductList = [
    {
      id: 0,
      name: "Basic",
      description: "This is a basic membership",
      price: 15 * 0.95,
      subscriptionLength: "6 months",
    },
    {
      id: 1,
      name: "Gold",
      description: "This is a gold membership",
      price: 40 * 0.95,
      subscriptionLength: "1 year",
    },
    {
      id: 2,
      name: "Premium",
      description: "This is a premium membership",
      price: 200 * 0.95,
      subscriptionLength: "Life",
    },
  ];

  return (
    <div className="App">
      <div className="app-container">
        <div className="registration-container">
          <Routes>
            <Route
              path="/"
              element={
                <RegisterPage
                  productList={productList}
                  setUser={setUser}
                  discountedProductList={discountedProductList}
                />
              }
            />
          </Routes>
        </div>
        <div className="messageboard-container">
          <Header />
          <div>
            <div className="messageboard-header">
              <h2>Welcome back!</h2>
            </div>
            <div className="messageboard-message">
              <p>It's been a while since we have seen you. Lets get back</p>
              <p> to collecting together!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
