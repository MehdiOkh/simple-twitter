import { AccountCircle, VpnKeyRounded } from "@mui/icons-material";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  TextField,
  InputAdornment,
} from "@mui/material";

const ChangePassword = () => {
  return (
    <Card elevation={4} sx={{ minWidth: 275 }}>
      <CardContent
        sx={{ display: "flex", flexDirection: "column", gap: "15px" }}
      >
        <Typography
          variant="h3"
          sx={{ fontSize: 18 }}
          color="text.primary"
          gutterBottom
        >
          Change Password
        </Typography>
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
      </CardContent>
      <CardActions>
        <Button sx={{ width: "100%", margin: "auto" }} variant="outlined">
          Change Password
        </Button>
      </CardActions>
    </Card>
  );
};

export default ChangePassword;
