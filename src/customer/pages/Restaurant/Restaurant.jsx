import {
  Divider,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const categories = [
  "Thali",
  "Snacks",
  "Indian Main Course",
  "Rice and Biryani",
  "Dessert",
  "Drinks",
  "Fast Food",
];

const foodType = ["Vegetarian Only", "Non-Vegetarian Only", "Both"];

const Restaurant = () => {
  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedFoodType, setSelectedFoodtype] = useState();

  const handleFoodTypeChange = () => {
    console.log("Selected Food Type- ", selectedFoodType);
  };

  const handleCategoryChange = () => {
    console.log("Selected category", selectedCategory);
  };
  return (
    <div className="px-5 lg:px-20">
      <section>
        <h3 className="text-gray-500 py-2 mt-10">
          {`Home/India/Food Rush/2/Order Online`}
        </h3>
        <div>
          <img
            className="w-full h-[40vh] object-cover"
            src="https://qph.cf2.quoracdn.net/main-qimg-4ffaba0a5fd743d323df1125b2dc1b6c"
            alt=""
          />
        </div>
        <div>
          <h1 className="text-4xl py-1 font-semibold">{`Fuel Headquarters`}</h1>
          <p className="text-gray-400">Pasta, Coffee, Fast Food Cafe</p>
          <p className="py-3 text-purple-300">
            {" "}
            Open now 10:30 am - 12midnight
          </p>
        </div>
      </section>
      <Divider />
      <section className="pt-[2rem] lg:flex relative">
        <div className="space-y-10 lg:w-[20%]">
          <div className="space-y-5 lg:sticky top-28">
            <div>
              <Typography sx={{ paddingBottom: "1rem" }} variant="h5">
                Category
              </Typography>
              <FormControl component={"fieldset"}>
                <RadioGroup
                  name="category"
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                >
                  {categories.map((item, index) => (
                    <FormControlLabel
                      key={index}
                      value={item}
                      control={<Radio />}
                      label={item}
                      sx={{ color: "gray" }}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
            <Divider />
            <div>
              <Typography sx={{ paddingBottom: "1rem" }} variant="h5">
                Category
              </Typography>
              <FormControl component={"fieldset"}>
                <RadioGroup
                  name="foodType"
                  value={selectedFoodType}
                  onChange={handleFoodTypeChange}
                >
                  {foodType.map((item, index) => (
                    <FormControlLabel
                      key={index}
                      value={item}
                      control={<Radio />}
                      label={item}
                      sx={{ color: "gray" }}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Restaurant;
