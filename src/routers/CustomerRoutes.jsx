import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../customer/pages/HomePage/HomePage";
import Restaurant from "../customer/pages/Restaurant/Restaurant";

const CustomerRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/restaurant/:city/:name/:id" element={<Restaurant />} />
    </Routes>
  );
};

export default CustomerRoutes;
