import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useAuth } from "../Auth/AuthContext";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Box, Typography, Container, Link } from "@mui/material";
import { login } from "../../api/userApi"; 
import { toast } from "react-toastify";

const LoginPage = () => {
  const { login: authenticate } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (values) => {
    if (values.email === "admin" && values.password === "admin") {
   
      authenticate("admin-token"); 
      toast.success("Login successful!");
      navigate("/users");
      return;
    }else{
      toast.error("Invalid login credentials.");
    }
    // try {
    //   const response = await login(values);
    //   authenticate(response.data.token); // Save token and authenticate user
    //   toast.success("Login successful!");
    //   navigate("/users");
    // } catch (error) {
    //   toast.error("Invalid login credentials.");
    // }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          mt: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={Yup.object({
            email: Yup.string().email("Invalid email address").required("Email is required"),
            password: Yup.string().required("Password is required"),
          })}
          onSubmit={handleLogin}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form>
              <Field
                as={TextField}
                name="email"
                label="Email"
                fullWidth
                margin="normal"
                variant="outlined"
                error={touched.email && !!errors.email}
                helperText={touched.email && errors.email}
              />
              <Field
                as={TextField}
                name="password"
                label="Password"
                type="password"
                fullWidth
                margin="normal"
                variant="outlined"
                error={touched.password && !!errors.password}
                helperText={touched.password && errors.password}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                sx={{ mt: 3, mb: 2 }}
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </Button>
            </Form>
          )}
        </Formik>

        <Box sx={{ textAlign: "center", mt: 2 }}>
          <Typography variant="body2">
            Forgot your password?{" "}
            <Link
              onClick={() => navigate("/forgot-password")}
              underline="hover"
              sx={{ cursor: "pointer" }}
            >
              Reset Password
            </Link>
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Don't have an account?{" "}
            <Link
              onClick={() => navigate("/signup")}
              underline="hover"
              sx={{ cursor: "pointer" }}
            >
              Sign Up
            </Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginPage;
