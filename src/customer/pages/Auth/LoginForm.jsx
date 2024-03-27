import { Button, TextField, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { loginUser } from "../State/Authentication/Action";

const initialValues = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    // You can handle login submission here, e.g., send data to your server
    //console.log("Login form values:", values);
    dispatch(loginUser({ userData: values, navigate }));
  };
  return (
    <div>
      <Typography variant="h5" className="text-center">
        Login
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 2, padding: "1rem" }}
          >
            Login
          </Button>
        </Form>
      </Formik>

      <Typography variant="body2" align="center" sx={{ mt: 3 }}>
        Don't have an account?
        <Button size="small" onClick={() => navigate("/account/register")}>
          Register
        </Button>
      </Typography>
    </div>
  );
};

export default LoginForm;
