import React, { Fragment, useState } from "react";
import CartItem from "./CartItem";
import {
  Box,
  Button,
  Card,
  Divider,
  Grid,
  Modal,
  TextField,
} from "@mui/material";
import AddressCard from "./AddressCard";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";

const addresses = [1, 1, 1, 1, 1];
export const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  outline: "none",
  boxShadow: 24,
  p: 4,
};
const initialValues = {
  streetAddress: "",
  state: "",
  pincode: "",
  city: "",
};

const validationSchema = Yup.object().shape({
  streetAddress: Yup.string().required("Street Address is required"),
  state: Yup.string().required("State is required"),
  city: Yup.string().required("City is required"),
  pincode: Yup.number().required("Pincode is required"),
});

const Cart = () => {
  const [openAddressModal, setOpenAddressModal] = useState();
  const { cart } = useSelector((store) => store);

  const createOrderUsingSelectedAddress = () => {
    console.log("create order");
  };
  const handleOpenAddressModal = () => {
    setOpenAddressModal(true);
    console.log("handle open address modal");
  };
  const handleSubmit = (values) => {
    console.log("handl submit- ", values);
  };

  const handleCloseAddressModal = () => {
    setOpenAddressModal(false);
  };

  return (
    <>
      <main className="lg:flex justify-between">
        <section className="lg:w-[30%] space-y-6 lg: min-h-screen pt-10">
          <div className="space-y-6">
            {cart.cartItems.map((item) => (
              <CartItem item={item} />
            ))}
          </div>
          <Divider />

          <div className="billDetails px-5 text-sm">
            <p className="font-extralight py-5">Bill Details</p>
            <div className="space-y-3">
              <div className="flex justify-between text-gray-400">
                <p>Item Total</p>
                <p>${cart.cart.total}</p>
              </div>
              <div className="flex justify-between text-gray-400">
                <p>Delivery Fee</p>
                <p>$2</p>
              </div>
              <div className="flex justify-between text-gray-400">
                <p>Tax and Restaurant Charges</p>
                <p>$3</p>
              </div>
              <Divider />
              <div className="flex justify-between text-gray-400">
                <p>Total Pay</p>
                <p>${cart.cart.total + 5}</p>
              </div>
            </div>
          </div>
        </section>
        <Divider orientation="vertical" flexItem />

        <section className="lg:w-[70%] px-5 flex justify-center px-5 pb-10 lg:pb-0">
          <div>
            <h1 className="text-center font-semibold text-2xl py-10">
              Choose Delivery Address
            </h1>

            <div className="flex gap-5 flex-wrap justify-center">
              {addresses.map((item1) => (
                <AddressCard
                  showButton={true}
                  //  here item1 is the addresses array ka address and
                  // item is the item prop passed to the AddressCard component(child component)
                  item={item1}
                  handleSelectAddress={createOrderUsingSelectedAddress}
                />
              ))}

              <Card className="flex space-x-5 lg:w-64 m-5 p-5">
                <AddLocationAltIcon />
                <div className="space-y-3 text-gray-500">
                  <h1 className="font-semibold text-lg text-white">
                    Add New Address
                  </h1>
                  <Button
                    onClick={handleOpenAddressModal}
                    fullWidth
                    variant="contained"
                    sx={{ padding: ".75rem" }}
                  >
                    Add
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Modal open={openAddressModal} onClose={handleCloseAddressModal}>
        <Box sx={style}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Field
                    label="Street Address"
                    fullWidth
                    variant="outlined"
                    error={!ErrorMessage("streetAddress")}
                    name="streetAddress"
                    as={TextField}
                    helperText={
                      <ErrorMessage name="streetAddress">
                        {(msg) => <span className="text-red-600">{msg}</span>}
                      </ErrorMessage>
                    }
                  />
                </Grid>

                <Grid item xs={6}>
                  <Field
                    label="State"
                    fullWidth
                    variant="outlined"
                    error={!ErrorMessage("state")}
                    name="state"
                    as={TextField}
                    helperText={
                      <ErrorMessage name="state">
                        {(msg) => <span className="text-red-600">{msg}</span>}
                      </ErrorMessage>
                    }
                  />
                </Grid>

                <Grid item xs={6}>
                  <Field
                    label="Pincode"
                    fullWidth
                    variant="outlined"
                    error={!ErrorMessage("pincode")}
                    name="pincode"
                    as={TextField}
                    helperText={
                      <ErrorMessage name="pincode">
                        {(msg) => <span className="text-red-600">{msg}</span>}
                      </ErrorMessage>
                    }
                  />
                </Grid>

                <Grid item xs={12}>
                  <Field
                    label="City"
                    fullWidth
                    variant="outlined"
                    error={!ErrorMessage("city")}
                    name="city"
                    as={TextField}
                    helperText={
                      <ErrorMessage name="city">
                        {(msg) => <span className="text-red-600">{msg}</span>}
                      </ErrorMessage>
                    }
                  />
                </Grid>
                <Grid className="mt-5 ml-5" xs={12}>
                  <Button type="Submit" variant="contained">
                    Deliver here
                  </Button>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </Box>
      </Modal>
    </>
  );
};

export default Cart;
