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
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fab,
} from "@mui/material";
import * as yup from "yup";
import { useFormik } from "formik";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { UpdateProfileFetcher } from "../apis/LoginFetcher";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { UserFetcher } from "../apis/usersFetcher";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const validationSchema = yup.object({
  username: yup.string().required("Username or email is required"),
  email: yup.string().required("Email is required"),
  password: yup
    .string()
    .min(8, "Minimum length is 8")
    .required("Password is required"),
  firstName: yup.string().required("your firstname is required"),
  lastName: yup.string().required("your lastname is required"),
  description: yup.string(),
  avatar: yup.string(),
});
const UpdateProfile = () => {
  const nav = useNavigate();
  const [dialogOpen, setDialogOpen] = useState(false);

  const mutation = useMutation({
    mutationFn: UpdateProfileFetcher,
    onSuccess: (data) => {
      toast.success("Profile was updated successfully");
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
      description: "",
      avatar: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setDialogOpen(false);
      mutation.mutate(values);
    },
  });
  return (
    <>
      <Dialog
        maxWidth="md"
        onClose={() => setDialogOpen(false)}
        open={dialogOpen}
      >
        <form onSubmit={formik.handleSubmit}>
          <DialogTitle>Update your profile:</DialogTitle>
          <DialogContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <TextField
              sx={{ marginTop: "15px" }}
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
            <TextField
              id="outlined-basic"
              label="Description"
              variant="outlined"
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              error={
                formik.touched.description && Boolean(formik.errors.description)
              }
              helperText={
                formik.touched.description && formik.errors.description
              }
            />
            <TextField
              id="outlined-basic"
              label="Avatar link"
              variant="outlined"
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              name="avatar"
              value={formik.values.avatar}
              onChange={formik.handleChange}
              error={formik.touched.avatar && Boolean(formik.errors.avatar)}
              helperText={formik.touched.avatar && formik.errors.avatar}
            />
          </DialogContent>
          <DialogActions>
            <Button type="submit">Submit</Button>
          </DialogActions>
        </form>
      </Dialog>
      <Box sx={{ bottom: "90px", right: "20px", position: "fixed" }}>
        <Fab
          aria-label="save"
          color="primary"
          sx={{ padding: "25px" }}
          onClick={() => setDialogOpen(true)}
        >
          <AccountCircleIcon />
        </Fab>
      </Box>
    </>
  );
};

export default UpdateProfile;
