import {
  Box,
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

const orders = [1, 1, 1, 1, 1, 1];

const OrderTable = () => {
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
                <TableCell>Id</TableCell>
                <TableCell>Image</TableCell>
                <TableCell>Customer</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Ingredients</TableCell>
                <TableCell>Status</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Update</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((row) => (
                <TableRow key={row.name} sx={{}}>
                  <TableCell component="th" scope="row">
                    {1}
                  </TableCell>
                  <TableCell align="right">{"image"}</TableCell>
                  <TableCell align="right">{"123@gmail.com"}</TableCell>
                  <TableCell align="right">{"price"}</TableCell>
                  <TableCell align="right">{"sandwich"}</TableCell>
                  <TableCell align="right">{"ingredients"}</TableCell>
                  <TableCell align="right">{"completed"}</TableCell>
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
