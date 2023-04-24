import { AccountCircle, VpnKeyRounded } from "@mui/icons-material";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  TextField,
  InputAdornment,
  Container,
} from "@mui/material";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import LoginFetcher, { RegisterFetcher } from "../apis/LoginFetcher";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { useFormik } from "formik";

const validationSchema = yup.object({
  username: yup.string().required("Username or email is required"),
  email: yup.string().required("Email is required"),
  password: yup
    .string()
    .min(8, "Minimum length is 8")
    .required("Password is required"),
  firstName: yup.string().required("your firstname is required"),
  lastName: yup.string().required("your lastname is required"),
});
const Register = () => {
  const nav = useNavigate();
  // Mutations
  const mutation = useMutation({
    mutationFn: RegisterFetcher,
    onSuccess: (data) => {
      axios.defaults.headers[
        "Authorization"
      ] = `Bearer ${data.data.data.token}`;
      toast.success("Login was successful!");
      nav("/");
    },
  });
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      email: "",
      firstName: "",
      lastName: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      mutation.mutate(values);
    },
  });

  return (
    <Container sx={{ height: "100vh", display: "flex", alignItems: "center" }}>
      <Card
        elevation={4}
        sx={{
          maxWidth: 400,
          marginX: "auto",
        }}
      >
        <form onSubmit={formik.handleSubmit}>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <Typography
              variant="h3"
              sx={{ fontSize: 18 }}
              color="text.primary"
              gutterBottom
            >
              Register
            </Typography>

            <TextField
              id="outlined-basic"
              label="Username"
              variant="outlined"
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
            />

            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AlternateEmailIcon />
                  </InputAdornment>
                ),
              }}
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <VpnKeyRounded />
                  </InputAdornment>
                ),
              }}
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <TextField
              id="outlined-basic"
              label="Firstname"
              variant="outlined"
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              error={
                formik.touched.firstName && Boolean(formik.errors.firstName)
              }
              helperText={formik.touched.firstName && formik.errors.firstName}
            />
            <TextField
              id="outlined-basic"
              label="Lastname"
              variant="outlined"
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />
          </CardContent>
          <CardActions>
            <Button
              sx={{ width: "100%", margin: "auto" }}
              variant="outlined"
              type="submit"
            >
              Register
            </Button>
          </CardActions>
        </form>
      </Card>
    </Container>
  );
};
export default Register;
