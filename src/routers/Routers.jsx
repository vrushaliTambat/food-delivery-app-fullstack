import React from "react";
import { Route, Routes } from "react-router-dom";
import CustomerRoutes from "./CustomerRoutes";
import AdminRouters from "./AdminRoute";
import AdminRoute from "./AdminRoute";

const Routers = () => {
  return (
    <Routes>
      <Route path="/admin/restaurant/*" element={<AdminRoute />} />
      <Route path="/*" element={<CustomerRoutes />} />
    </Routes>
  );
};

export default Routers;
