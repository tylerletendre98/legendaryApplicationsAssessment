import "./App.css";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import SubscriptionPage from "./pages/SubscriptionPage";
import Header from "./components/Header/header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/subscriptionPage" element={<SubscriptionPage />} />
      </Routes>
    </div>
  );
}

export default App;
