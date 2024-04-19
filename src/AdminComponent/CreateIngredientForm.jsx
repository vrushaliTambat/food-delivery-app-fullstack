import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import { createIngredient } from "../customer/pages/State/Ingredients/Action";

const CreateIngredientForm = () => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { restaurant } = useSelector((store) => store);
  const [formData, setFormData] = useState({
    name: "",
    ingredientCategoryId: "",
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
    console.log(data);
    dispatch(createIngredient({ data, jwt }));
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
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={formData.ingredientCategoryId}
              label="Category"
              name="ingredientCategoryId"
              onChange={handleInputChange}
            >
              <MenuItem value={10}>Ingredient1</MenuItem>
              <MenuItem value={20}>Ingredient2</MenuItem>
              <MenuItem value={30}>Ingredient3</MenuItem>
            </Select>
          </FormControl>

          <Button type="submit" variant="contained">
            Create Category
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateIngredientForm;
