import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../customer/pages/HomePage/HomePage";
import Restaurant from "../customer/pages/Restaurant/Restaurant";
import Navbar from "../customer/components/Navbar/Navbar";
import Cart from "../customer/pages/Cart/Cart";
import Profile from "../customer/pages/Profile/Profile";

const CustomerRoutes = () => {
  return (
    <div className="relative">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/restaurant/:city/:name/:id" element={<Restaurant />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default CustomerRoutes;
