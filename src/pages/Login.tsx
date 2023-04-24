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
  Link,
} from "@mui/material";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import LoginFetcher from "../apis/LoginFetcher";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate, useNavigation } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";

const validationSchema = yup.object({
  emailOrUsername: yup.string().required("Username or email is required"),
  password: yup
    .string()
    .min(8, "Minimum length is 8")
    .required("Password is required"),
});

const Login = () => {
  const nav = useNavigate();
  // Mutations
  const mutation = useMutation({
    mutationFn: LoginFetcher,
    onSuccess: (data) => {
      console.log(data.data.error);
      axios.defaults.headers[
        "Authorization"
      ] = `Bearer ${data.data.data.token}`;
      toast.success("Login was successful!");
      nav("/");
    },
  });

  const formik = useFormik({
    initialValues: {
      emailOrUsername: "",
      password: "",
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
              Login
            </Typography>
            <TextField
              id="outlined-basic"
              label="Username or Email"
              name="emailOrUsername"
              value={formik.values.emailOrUsername}
              onChange={formik.handleChange}
              error={
                formik.touched.emailOrUsername &&
                Boolean(formik.errors.emailOrUsername)
              }
              helperText={
                formik.touched.emailOrUsername && formik.errors.emailOrUsername
              }
              variant="outlined"
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              size="small"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <VpnKeyRounded />
                  </InputAdornment>
                ),
              }}
            />

            <Link
              sx={{
                marginRight: "auto",
                marginTop: "-16px",
                marginLeft: "2px",
                textDecoration: "none",
              }}
              href="/register"
            >
              sign up
            </Link>
          </CardContent>
          <CardActions>
            <Button
              type="submit"
              sx={{ width: "100%", margin: "auto" }}
              variant="outlined"
            >
              Login
            </Button>
          </CardActions>
        </form>
      </Card>
    </Container>
  );
};

export default Login;
