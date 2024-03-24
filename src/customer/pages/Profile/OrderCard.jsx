import { Button, Card } from "@mui/material";
import React from "react";

const OrderCard = () => {
  return (
    <Card className="flex justify-between items-center p-5 ">
      <div className="flex items-center space-x-5">
        <img
          className="h-16 w-16"
          src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
        <div>
          <p>Pancakes</p>
          <p className="text-gray-400">₹500</p>
        </div>
      </div>
      <div>
        <Button className="cursor-not-allowed" variant="contained">
          completed
        </Button>
      </div>
    </Card>
  );
};

export default OrderCard;
