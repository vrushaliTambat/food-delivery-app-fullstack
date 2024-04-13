import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "../AdminComponent/Admin";
import CreateRestaurantForm from "../AdminComponent/CreateRestaurantForm";
import { useSelector } from "react-redux";

const AdminRoute = () => {
  const { auth, restaurant } = useSelector((store) => store);
  return (
    <div>
      <Routes>
        <Route
          path="/*"
          //if it has restaurants added then show the admin profile and if not then direct him to the create restaurant form
          element={true ? <CreateRestaurantForm /> : <Admin />}
        />
      </Routes>
    </div>
  );
};

export default AdminRoute;
