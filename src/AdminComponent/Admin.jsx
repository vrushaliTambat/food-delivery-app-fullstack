import React, { useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { getRestaurantsCategory } from "../customer/pages/State/Restaurant/Action";
import { fetchRestaurantsOrder } from "../customer/pages/State/RestaurantOrder/Action";

const Admin = () => {
  const dispatch = useDispatch();
  const handleClose = () => {};
  const jwt = localStorage.getItem("jwt");
  const { auth, restaurant } = useSelector((store) => store);
  useEffect(() => {
    if (restaurant.usersRestaurant) {
      // dispatch(
      //   getIngredientCategory({ jwt, id: restaurant.usersRestaurant?.id })
      // );
      // dispatch(
      //   getIngredientsOfRestaurant({ jwt, id: restaurant.usersRestaurant?.id })
      // );
      dispatch(
        getRestaurantsCategory({
          jwt: auth.jwt || jwt,
          restaurantId: restaurant.usersRestaurant?.id,
        })
      );

      dispatch(
        fetchRestaurantsOrder({
          restaurantId: restaurant.usersRestaurant?.id,
          jwt: auth.jwt || jwt,
        })
      );
    }
  }, [restaurant.usersRestaurant]);
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
