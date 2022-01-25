import "./App.css";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import SubscriptionPage from "./pages/SubscriptionPage";
import Header from "./components/Header/header";

function App() {

  const productList = [
    {
      name:'Basic',
      description:'This is a basic membership',
      price: 15,
      subscriptionLength:'6 months'
    },
    {
      name:'Gold',
      description:'This is a gold membership',
      price: 40,
      subscriptionLength:'1 year'
    },
    {
      name:'Premium',
      description:'This is a premium membership',
      price: 200,
      subscriptionLength:'Life'
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
