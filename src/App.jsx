import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import CategoryBar from "./components/CategoryBar/CategoryBar";
import HomePage from "./components/pages/HomePage";
import CheckoutPage from "./components/pages/CheckoutPage";
import LoginPage from "./components/pages/LoginPage";
import ProductDetail from "./components/pages/ProductDetail";
import Footer from "./components/Footer/Footer";
import CartPage from "./components/pages/CartPage";
import ThankYouPage from "./components/pages/ThankYouPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <CategoryBar />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/amazon-fe-clone/success" element={<ThankYouPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
