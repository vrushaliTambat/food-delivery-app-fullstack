import React from "react";
import RestaurantCard from "../HomePage/RestaurantCard";
// import { restaurants } from "../../../Data/Restaurants";
import { useSelector } from "react-redux";

export default function Favorites() {
  const { auth } = useSelector((store) => store);
  return (
    <div>
      <h1 className="py-5 text-xl font-semibold text-center">My Favorites</h1>
      <div className="flex flex-wrap gap-4 justify-center">
        {auth.favorites.map((item) => (
          <RestaurantCard item={item} />
        ))}
      </div>
    </div>
  );
}
