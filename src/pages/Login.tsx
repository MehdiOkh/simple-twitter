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
            Login
          </Typography>
          <TextField
            id="outlined-basic"
            label="Username or Email"
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
            onClick={() => {
              mutation.mutate({
                emailOrUsername: "emailOrUsername",
                password: "password",
              });
            }}
            sx={{ width: "100%", margin: "auto" }}
            variant="outlined"
          >
            Login
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default Login;
