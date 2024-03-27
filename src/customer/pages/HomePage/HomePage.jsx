import React from "react";
import "./HomePage.css";
import MultipleItemCarousel from "./MultipleItemCarousel";
import { restaurants } from "../../../Data/Restaurants";
import RestaurantCard from "./RestaurantCard";
import Auth from "../Auth/Auth";

const HomePage = () => {
  return (
    <div className="pb-10">
      <section className="-z-50 banner relative flex flex-col justify-center items-center">
        <div className="w-[50vw] z-10 text-center">
          <p className="text-2xl lg:text-7xl font-bold z-10 py-5">Food Rush</p>
          <p className="z-10 text-gray-300 text-xl lg:text-4xl">
            Best Food Delivered at your DoorStep.
          </p>
        </div>
        <div className="cover absolute top-0 left-0 right-0"></div>
        <div className="fadeout"></div>
      </section>

      <section classname="p-10 lg:py-10 lg:px-20">
        <div classname="">
          <h1 className="text-2xl font-semibold text-gray-400 py-3 pb-10">
            Top Meals
          </h1>
        </div>

        <MultipleItemCarousel />
      </section>

      <section className="px-5 lg:px-20 pt-8">
        <div>
          <h1 className="text-2xl font-semibold text-gray-400 py-3 pb-8">
            Order from our Handpicked Favorites
          </h1>
          <div className="flex flex-wrap items-center justify-around">
            {restaurants.map((item) => (
              <RestaurantCard item={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
