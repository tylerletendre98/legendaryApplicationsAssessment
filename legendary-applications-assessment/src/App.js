import "./App.css";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import SubscriptionPage from "./pages/SubscriptionPage";
import Header from "./components/Header/header";

function App() {

  const productList = [
    {
      name:'basic',
      description:'this is a basic membership',
      price: 15,
      subscriptionLength:'6 months'
    },
    {
      name:'gold',
      description:'this is a gold membership',
      price: 35,
      subscriptionLength:'1 year'
    },
    {
      name:'premium',
      description:'this is a premium membership',
      price: 100,
      subscriptionLength:''
    }
  ]

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/subscriptionPage" element={<SubscriptionPage productList={productList} />} />
      </Routes>
    </div>
  );
}

export default App;
