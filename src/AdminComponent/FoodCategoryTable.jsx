import { Create, Delete } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Card,
  CardActions,
  CardHeader,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Modal,
} from "@mui/material";
import React from "react";
import CreateCategoryForm from "./CreateCategoryForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  outline: "none",
  p: 4,
};

const orders = [1, 1, 1, 1, 1, 1];

const FoodCategoryTable = () => {
  const dispatch = useDispatch();
  const { auth, restaurant } = useSelector((store) => store);
  const jwt = localStorage.getItem("jwt");
  const [openCreateCategory, setOpenCreateCategory] = React.useState(false);
  const handleOpenCreateCategory = () => setOpenCreateCategory(true);
  const handleCloseCreateCategory = () => setOpenCreateCategory(false);
  return (
    <Box>
      <Card className="mt-1">
        <CardHeader
          action={
            <IconButton onClick={handleOpenCreateCategory}>
              <Create />
            </IconButton>
          }
          title={"Food Category"}
          sx={{
            pt: 2,
            alignItems: "center",
          }}
        />

        <TableContainer>
          <Table sx={{}} aria-label="table in dashboard">
            <TableHead>
              <TableRow>
                <TableCell align="left">ID</TableCell>
                <TableCell align="left">Name</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((row) => (
                <TableRow key={row.name} sx={{}}>
                  <TableCell component="th" scope="row">
                    {1}
                  </TableCell>
                  <TableCell align="left">{"name"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>

      <Modal
        open={openCreateCategory}
        //clicking on the back drop and closing the form
        onClose={handleCloseCreateCategory}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* when create is clicked form is closed (on submit) */}
          <CreateCategoryForm handleClose={handleCloseCreateCategory} />
        </Box>
      </Modal>
    </Box>
  );
};

export default FoodCategoryTable;
