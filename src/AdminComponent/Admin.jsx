import React from "react";
import AdminSideBar from "./AdminSideBar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Orders from "./Orders";
import Menu from "./Menu";
import CreateRestaurantForm from "./CreateRestaurantForm";
import Ingredients from "./Ingredients";
import Events from "./Events";
import FoodCategory from "./FoodCategory";
import RestaurantDetails from "./RestaurantDetails";
import CreateMenuForm from "./CreateMenuForm";

const Admin = () => {
  const handleClose = () => {};
  return (
    <div>
      <div className="lg:flex justify-between">
        <div className="">
          <AdminSideBar handleClose={handleClose} />
        </div>

        <div className="lg:w-[80vw]">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/menu" element={<Menu />} />
            {/* <Route path="/add-menu" element={<AddMenuForm />} />
            <Route path="/add-restaurant" element={<CreateRestaurantForm />} /> */}
            <Route path="/event" element={<Events />} />
            <Route path="/ingredients" element={<Ingredients />} />
            <Route path="/category" element={<FoodCategory />} />
            <Route path="/details" element={<RestaurantDetails />} />
            <Route path="/add-menu" element={<CreateMenuForm />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Admin;
