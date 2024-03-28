import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const demo = [
  {
    category: "Nuts & seeds",
    ingredients: ["Cashews"],
  },
  {
    category: "Protein",
    ingredients: ["Chicken", "Eggs"],
  },
];

const MenuItemCard = () => {
  const handleCheckBoxChange = (value) => {
    console.log("value");
  };
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <div className="lg:flex items-center justify-between">
          <div className="lg:flex items-center lg:gap-5">
            <img
              className="w-[7rem] h-[7rem] object-cover"
              src="https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg"
              alt=""
            />

            <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
              <p className="font-semibold text-xl">Biryani</p>
              <p>₹650</p>
              <p className="text-gray-400">
                Delicious Hyderabadi Chicken Dum Biryani
              </p>
            </div>
          </div>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <form>
          <div className="flex gap-5 flex-wrap">
            {demo.map((item) => (
              <div>
                <p>{item.category}</p>
                <FormGroup>
                  {item.ingredients.map((item) => (
                    <FormControlLabel
                      control={
                        <Checkbox onChange={() => handleCheckBoxChange(item)} />
                      }
                      label={item}
                    />
                  ))}
                </FormGroup>
              </div>
            ))}
          </div>

          <div className="pt-5">
            <Button variant="contained" disabled={false} type="submit">
              {true ? "Add To Cart" : "Out of Stock"}
            </Button>
          </div>
        </form>
      </AccordionDetails>
    </Accordion>
  );
};

export default MenuItemCard;
