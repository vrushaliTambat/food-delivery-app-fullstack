import {
  Card,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import MenuItemCard from "./MenuItemCard";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const categories = [
  "Thali",
  "Snacks",
  "Indian Main Course",
  "Rice and Biryani",
  "Dessert",
  "Drinks",
  "Fast Food",
  "Chicken",
];

const foodTypes = [
  { label: "All", value: "all" },
  { label: "Vegetarian Only", value: "vegetarian" },
  { label: "Non-Vegetarian Only", value: "non_vegetarian" },
  { label: "Seasonal", value: "seasonal" },
];
const menu = [1, 1, 1, 1, 1, 1];

const Restaurant = () => {
  const [foodType, setFoodType] = useState("all");
  //const [selectedFoodType, setSelectedFoodtype] = useState();

  // const handleFoodTypeChange = () => {
  //   console.log("Selected Food Type- ", selectedFoodType);
  // };

  const handleFilter = (e) => {
    console.log(e.target.value, e.target.name);
  };
  return (
    <div className="px-5 lg:px-20">
      <section>
        <h3 className="text-gray-500 py-2 mt-10">
          {`Home/India/Food Rush/2/Order Online`}
        </h3>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <img
                className="w-full h-[40vh] object-cover"
                src="https://qph.cf2.quoracdn.net/main-qimg-4ffaba0a5fd743d323df1125b2dc1b6c"
                alt=""
              />
            </Grid>

            <Grid item xs={12} lg={6}>
              <img
                className="w-full h-[40vh] object-cover"
                src="https://media.istockphoto.com/id/667442560/photo/restaurant-chilling-out-classy-lifestyle-reserved-concept.jpg?s=612x612&w=0&k=20&c=YgLQM26TAb3738AS-UyvFDLpVKqj9kJjW5e9Ll6dU-8="
                alt=""
              />
            </Grid>

            <Grid item xs={12} lg={6}>
              <img
                className="w-full h-[40vh] object-cover"
                src="https://cdn.pixabay.com/photo/2016/11/18/15/53/breakfast-1835478_1280.jpg"
                alt=""
              />
            </Grid>
          </Grid>
        </div>

        <div className="pt-3 pb-5">
          <h1 className="text-4xl  font-semibold">{`Fuel Headquarters`}</h1>
          <p className="text-gray-500 mt-1">Pasta, Coffee, Fast Food Cafe</p>
          <div className="space-y-3 mt-3">
            <p className="text-gray-400 flex items-center gap-3">
              <LocationOnIcon />
              <span>Near Fulton Street, New York</span>
            </p>
            <p className="text-gray-400 flex items-center gap-3">
              <CalendarTodayIcon />
              <span>Mon-Sun: 10:00AM - 10:00PM (Today)</span>
            </p>
          </div>
        </div>
      </section>
      <Divider />

      <section className="pt-[2rem] lg:flex relative">
        <div className="space-y-10 lg:w-[20%] filter">
          <div className="box space-y-5 lg:sticky top-28">
            <div>
              <Typography sx={{ paddingBottom: "1rem" }} variant="h5">
                Food Type
              </Typography>

              <FormControl className="py-10 space-y-5 " component={"fieldset"}>
                <RadioGroup
                  onChange={handleFilter}
                  name="food_type"
                  value={foodType}
                >
                  {foodTypes.map((item) => (
                    <FormControlLabel
                      key={item.value}
                      value={item.value}
                      control={<Radio />}
                      label={item.label}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
            <Divider />
            <div>
              <Typography sx={{ paddingBottom: "1rem" }} variant="h5">
                Food Category
              </Typography>

              <FormControl className="py-10 space-y-5 " component={"fieldset"}>
                <RadioGroup
                  onChange={handleFilter}
                  name="food_category"
                  value={foodType}
                >
                  {categories.map((item) => (
                    <FormControlLabel
                      key={item}
                      value={item}
                      control={<Radio />}
                      label={item}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </div>

        <div className="lg:w-[80%] space-y-5 lg:pl-10">
          {menu.map((item) => (
            <MenuItemCard item={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Restaurant;
