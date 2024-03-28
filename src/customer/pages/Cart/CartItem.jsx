import { Chip, IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const CartItem = () => {
  return (
    <div className="px-5">
      <div className="lg:flex items-center lg:space-x-5">
        <div>
          <img
            className="w-[5rem] h-[5rem] object-cover"
            src="https://images.pexels.com/photos/5410400/pexels-photo-5410400.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
          />
        </div>
        <div className="flex items-center justify-between lg:w-[70%]">
          <div className="space-y-1 lg:space-y-3 w-full">
            <p>Pav bhaji</p>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-1">
                <IconButton color="primary">
                  <RemoveCircleOutlineIcon />
                </IconButton>
                <div className="w-5 h-5 text-xs"></div>
                <IconButton color="primary">
                  <AddCircleOutlineIcon />
                </IconButton>
              </div>
            </div>
          </div>
          <p>₹199</p>
        </div>
      </div>
      <div className="pt-3 space-x-2">
        {[1, 1, 1].map((item) => (
          <Chip label={"bread"} />
        ))}
      </div>
    </div>
  );
};

export default CartItem;
