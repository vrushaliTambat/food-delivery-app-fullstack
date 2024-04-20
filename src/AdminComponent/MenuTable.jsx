import { Create, Delete } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  Chip,
  CardActions,
  CardHeader,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  deleteFoodAction,
  getMenuItemsByRestaurantId,
} from "../customer/pages/State/Menu/Action";

const MenuTable = () => {
  const dispatch = useDispatch();
  const { restaurant, menu } = useSelector((store) => store);
  const jwt = localStorage.getItem("jwt");
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(
      getMenuItemsByRestaurantId({
        restaurantId: restaurant.usersRestaurant?.id,
        jwt: localStorage.getItem("jwt"),
        seasonal: false,
        vegetarian: false,
        nonveg: false,
        foodCategory: "",
      })
    );
  }, []);

  const handleDeleteFood = (foodId) => {
    dispatch(deleteFoodAction({ foodId, jwt }));
  };

  return (
    <Box>
      <Card className="mt-1">
        <CardHeader
          action={
            <IconButton onClick={() => navigate("/admin/restaurant/add-menu")}>
              <Create />
            </IconButton>
          }
          title={"Menu"}
          sx={{
            pt: 2,
            alignItems: "center",
          }}
        />

        <TableContainer>
          <Table sx={{}} aria-label="table in dashboard">
            <TableHead>
              <TableRow>
                <TableCell align="left">Image</TableCell>
                <TableCell align="right">Title</TableCell>
                <TableCell align="right">Ingredients</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Availability</TableCell>
                <TableCell align="right">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {menu.menuItems?.map((item) => (
                <TableRow key={item.id} sx={{}}>
                  <TableCell>
                    <Avatar alt={item.name} src={item.images[0]}></Avatar>
                  </TableCell>
                  <TableCell align="right">{item.name}</TableCell>
                  <TableCell align="right">
                    {item.ingredients.map((ingredient) => (
                      <Chip label={ingredient.name} />
                    ))}
                  </TableCell>
                  <TableCell align="right">${item.price}</TableCell>
                  <TableCell align="right">
                    {item.available ? "IN STOCK" : "OUT OF STOCK"}
                  </TableCell>
                  <TableCell align="right">
                    <IconButton
                      color="primary"
                      onClick={() => handleDeleteFood(item.id)}
                    >
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>

      {/* <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={restaurantsOrder.loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop> */}
    </Box>
  );
};

export default MenuTable;
