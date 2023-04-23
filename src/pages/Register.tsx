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

  return (
    <Container sx={{ height: "100vh", display: "flex", alignItems: "center" }}>
      <Card
        elevation={4}
        sx={{
          maxWidth: 400,
          marginX: "auto",
        }}
      >
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
          />
        </CardContent>
        <CardActions>
          <Button
            onClick={() => {
              mutation.mutate({
                username: "emailOrUsername",
                password: "password",
                firstName: "firstname",
                lastName: "firstname",
                email: "email",
              });
            }}
            sx={{ width: "100%", margin: "auto" }}
            variant="outlined"
            type="submit"
          >
            Register
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};
export default Register;
