import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ManiPageLayout from "./Layout/ManiPageLayout";
import CartPage from "./pages/CartPage";
import PaymentPage from "./pages/PaymentPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ManiPageLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Route>
    </Routes>
  );
};

export default App;
