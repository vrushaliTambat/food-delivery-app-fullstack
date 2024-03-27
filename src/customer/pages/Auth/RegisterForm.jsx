import React from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Field, Form, Formik } from "formik";
import { Navigate, useNavigate } from "react-router-dom";
import { registerUser } from "../State/Authentication/Action";
import { useDispatch } from "react-redux";

const initialValues = {
  fullName: "",
  email: "",
  password: "",
  role: "ROLE_CUSTOMER",
};
const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    console.log("form values", values);
    dispatch(registerUser({ userData: values, navigate }));
  };
  return (
    <div>
      <Typography variant="h5" className="text-center">
        Register
      </Typography>

      <Formik
        initialValues={initialValues}
        //validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field
            as={TextField}
            variant="outlined"
            fullWidth
            margin="normal"
            label="Full Name"
            name="fullName"
            id="email"
          />

          <Field
            as={TextField}
            variant="outlined"
            fullWidth
            margin="normal"
            label="Email Address"
            name="email"
            id="email"
          />
          <Field
            as={TextField}
            variant="outlined"
            fullWidth
            margin="normal"
            label="Password"
            name="password"
            type="password"
            id="password"
          />

          <Field
            className="mt-3"
            as={Select}
            variant="outlined"
            margin="normal"
            fullWidth
            name="role"
            id="role"

            // onChange={handleChange}
          >
            <MenuItem value={"ROLE_CUSTOMER"}>Customer</MenuItem>
            <MenuItem value={"ROLE_RESTAURANT_OWNER"}>
              Restaurant Owner
            </MenuItem>
          </Field>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 2, padding: "1rem" }}
          >
            Register
          </Button>
        </Form>
      </Formik>

      <Typography variant="body2" align="center" sx={{ mt: 3 }}>
        have an account already?
        <Button size="small" onClick={() => navigate("/account/login")}>
          Login
        </Button>
      </Typography>
    </div>
  );
};

export default RegisterForm;
