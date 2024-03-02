import { Button, Card } from "@mui/material";
import React from "react";

const MenuItemCard = ({ item }) => {
  const handleAddItemToCart = () => {
    console.log("handle add Item to Cart");
  };
  return (
    <Card className="p-5 lg:flex items-center justify-between box">
      <div className="lg:flex items-center lg:space-x-5">
        <img
          className="w-[7rem] h-[7rem] object-cover"
          src="https://thecozycook.com/wp-content/uploads/2020/02/Copycat-McDonalds-French-Fries-.jpg"
          alt=""
        />
        <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
          <p className="font-semibold text-xl">{`Fries`}</p>
          <p>₹{129}</p>
          <p className="text-gray-400">{`Peri Peri Fries with Mayo and Ketchup dips`}</p>
        </div>
      </div>
      <div>
        <Button onClick={handleAddItemToCart}>Add to Cart</Button>
      </div>
    </Card>
  );
};

export default MenuItemCard;
