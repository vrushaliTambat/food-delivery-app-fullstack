import { TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createCategoryAction } from "../customer/pages/State/Restaurant/Action";

const CreateCategoryForm = () => {
  const { restaurant } = useSelector((store) => store);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    categoryName: "",
    restaurantId: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    //prevents default form sub ission behaviour
    event.preventDefault();
    const data = {
      name: formData.categoryName,
      restaurant: {
        id: 1,
      },
    };
    dispatch(
      createCategoryAction({ reqData: data, jwt: localStorage.getItem("jwt") })
    );
    console.log(data);
  };

  return (
    <div className=" ">
      <div className="p-5">
        <h1 className="text-gray-400 text-center text-xl pb-10">
          Create Category
        </h1>
        <form className="space-y-5" onSubmit={handleFormSubmit}>
          <TextField
            label="Category Name"
            name="categoryName"
            value={formData.categoryName}
            onChange={handleInputChange}
            fullWidth
          />

          <Button type="submit" variant="contained">
            Create Category
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateCategoryForm;
