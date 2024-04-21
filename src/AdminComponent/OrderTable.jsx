import {
  Avatar,
  AvatarGroup,
  Box,
  Card,
  Chip,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  MenuItem,
  Menu,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchRestaurantsOrder,
  updateOrderStatus,
} from "../customer/pages/State/RestaurantOrder/Action";

const orderStatus = [
  { label: "Pending", value: "PENDING" },
  { label: "Completed", value: "COMPLETED" },
  { label: "Out For Delivery", value: "OUT_FOR_DELIVERY" },
  { label: "Delivered", value: "DELIVERED" },
];

const OrderTable = () => {
  const dispatch = useDispatch();
  const { restaurant, restaurantOrder, menu } = useSelector((store) => store);
  const jwt = localStorage.getItem("jwt");

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    dispatch(
      fetchRestaurantsOrder({
        jwt,
        restaurantId: restaurant.usersRestaurant?.id,
      })
    );
  }, []);

  const handleUpdateOrder = (orderId, orderStatus) => {
    dispatch(updateOrderStatus({ orderId, orderStatus, jwt }));
    handleClose();
  };

  return (
    <Box>
      <Card className="mt-1">
        <CardHeader
          title={"All Orders"}
          sx={{
            pt: 2,
            alignItems: "center",
          }}
        />
        <TableContainer>
          <Table sx={{}} aria-label="table in dashboard">
            <TableHead>
              <TableRow>
                <TableCell align="left">Id</TableCell>
                <TableCell align="right">Image</TableCell>
                <TableCell align="right">Customer</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Ingredients</TableCell>
                <TableCell align="right">Status</TableCell>
                <TableCell align="right" sx={{ textAlign: "center" }}>
                  Update
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {restaurantOrder.orders.map((item) => (
                <TableRow key={item.name} sx={{}}>
                  <TableCell component="th" scope="row">
                    {item.id}
                  </TableCell>
                  <TableCell align="right">
                    <AvatarGroup>
                      {item.items.map((orderItem) => (
                        <Avatar src={orderItem.food?.images[0]} />
                      ))}
                    </AvatarGroup>
                  </TableCell>
                  <TableCell align="right">{item.customer?.fullName}</TableCell>
                  <TableCell align="right">${item.totalAmount}</TableCell>
                  <TableCell align="right">
                    {item.items.map((orderItem) => (
                      <p>{orderItem.food?.name}</p>
                    ))}
                  </TableCell>
                  <TableCell align="right">
                    {item.items.map((orderItem) => (
                      <div>
                        {orderItem.ingredients.map((ingredient) => (
                          <Chip label={ingredient} />
                        ))}
                      </div>
                    ))}
                  </TableCell>
                  <TableCell align="right">{item.orderStatus}</TableCell>
                  <TableCell align="right">
                    <Button
                      id="basic-button"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                    >
                      Update
                    </Button>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      {orderStatus.map((status) => (
                        <MenuItem
                          onClick={() =>
                            handleUpdateOrder(item.id, status.value)
                          }
                        >
                          {status.label}
                        </MenuItem>
                      ))}
                    </Menu>
                  </TableCell>
                </TableRow>
                // <TableRow
                //   className="cursor-pointer"
                //   hover
                //   key={row.name}
                //   sx={{
                //     "&:last-of-type td, &:last-of-type th": { border: 0 },
                //   }}
                // >
                //   <TableCell>{item?.id}</TableCell>
                //   <TableCell sx={{}}>
                //     <AvatarGroup max={4} sx={{ justifyContent: "start" }}>
                //       {item.items.map((orderItem) => (
                //         <Avatar
                //           alt={orderItem.food.name}
                //           src={orderItem.food?.images[0]}
                //         />
                //       ))}
                //     </AvatarGroup>{" "}
                //   </TableCell>

                //   <TableCell sx={{}}>{item?.customer.email}</TableCell>

                //   <TableCell>₹{item?.totalAmount}</TableCell>

                //   <TableCell className="">
                //     {item.items.map((orderItem) => (
                //       <p>{orderItem.food?.name}</p>
                //     ))}
                //   </TableCell>
                //   {!isDashboard && (
                //     <TableCell className="space-y-2">
                //       {item.items.map((orderItem) => (
                //         <div className="flex gap-1 flex-wrap">
                //           {orderItem.ingredients?.map((ingre) => (
                //             <Chip label={ingre} />
                //           ))}
                //         </div>
                //       ))}
                //     </TableCell>
                //   )}
                //   {!isDashboard && (
                //     <TableCell className="text-white">
                //       <Chip
                //         sx={{
                //           color: "white !important",
                //           fontWeight: "bold",
                //           textAlign: "center",
                //         }}
                //         label={item?.orderStatus}
                //         size="small"
                //         color={
                //           item.orderStatus === "PENDING"
                //             ? "info"
                //             : item?.orderStatus === "DELIVERED"
                //             ? "success"
                //             : "secondary"
                //         }
                //         className="text-white"
                //       />
                //     </TableCell>
                //   )}
                //   {!isDashboard && (
                //     <TableCell
                //       sx={{ textAlign: "center" }}
                //       className="text-white"
                //     >
                //       <div>
                //         <Button
                //           id={`basic-button-${item?.id}`}
                //           aria-controls={`basic-menu-${item.id}`}
                //           aria-haspopup="true"
                //           aria-expanded={Boolean(anchorElArray[index])}
                //           onClick={(event) =>
                //             handleUpdateStatusMenuClick(event, index)
                //           }
                //         >
                //           Status
                //         </Button>
                //         <Menu
                //           id={`basic-menu-${item?.id}`}
                //           anchorEl={anchorElArray[index]}
                //           open={Boolean(anchorElArray[index])}
                //           onClose={() => handleUpdateStatusMenuClose(index)}
                //           MenuListProps={{
                //             "aria-labelledby": `basic-button-${item.id}`,
                //           }}
                //         >
                //           {orderStatus.map((s) => (
                //             <MenuItem
                //               onClick={() =>
                //                 handleUpdateOrder(item.id, s.value, index)
                //               }
                //             >
                //               {s.label}
                //             </MenuItem>
                //           ))}
                //         </Menu>
                //       </div>
                //     </TableCell>
                //   )}
                //   {/* {!isDashboard && (
                //     <TableCell
                //       sx={{ textAlign: "center" }}
                //       className="text-white"
                //     >
                //       <Button
                //         onClick={() => handleDeleteOrder(item._id)}
                //         variant="text"
                //       >
                //         delete
                //       </Button>
                //     </TableCell>
                //   )} */}
                // </TableRow>
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

export default OrderTable;
