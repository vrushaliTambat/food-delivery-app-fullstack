import React, { useState } from "react";
import { TextField, Button, makeStyles, Card, Modal, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { createIngredientCategory } from "../customer/pages/State/Ingredients/Action";

const CreateIngredientCategoryForm = ({ handleClose }) => {
  //   const { id } = useParams();
  const dispatch = useDispatch();
  const { restaurant } = useSelector((store) => store);
  const jwt = localStorage.getItem("jwt");

  const [formData, setFormData] = useState({
    name: "",
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const data = {
      name: formData.name,
      restaurantId: restaurant.usersRestaurant.id,
    };
    console.log("Form submitted:", formData);
    dispatch(createIngredientCategory({ data, jwt }));
    //     setFormData({
    //       name: "",
    //     });
    //     const data = {
    //       name: formData.name,
    //       restaurantId: restaurant.usersRestaurant.id,
    //     };
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className=" ">
      <div className="p-5">
        <h1 className="text-gray-400 text-center text-xl pb-10">
          Create Ingredient Category
        </h1>
        <form className="space-y-5" onSubmit={handleFormSubmit}>
          <TextField
            label="Category Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            fullWidth
          />

          <Button type="submit" variant="contained" color="primary">
            Create
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateIngredientCategoryForm;
