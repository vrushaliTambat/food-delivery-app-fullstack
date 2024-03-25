import React from "react";
import RestaurantCard from "../HomePage/RestaurantCard";

export default function Favorites() {
  return (
    <div>
      <h1 className="py-5 text-xl font-semibold text-center">My Favorites</h1>
      <div className="flex flex-wrap gap-4 justify-center">
        {[1, 1, 1].map((item) => (
          <RestaurantCard item={item} />
        ))}
      </div>
    </div>
  );
}
