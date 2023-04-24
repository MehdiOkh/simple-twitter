import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Collapse,
  Box,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { UsersListFetcher } from "../apis/usersFetcher";
import { useNavigate } from "react-router-dom";
interface IUserProfile {
  id: string;
  username: string;
  email: string;
  description: string;
  avatar: string;
}
const UserProfile = ({
  id,
  username,
  avatar,
  description,
  email,
}: IUserProfile) => {
  const [commentsOpen, setCommentsOpen] = useState(false);
  const nav = useNavigate();

  return (
    <Card sx={{ minWidth: 375, maxWidth: 475, marginY: "6px" }}>
      <CardMedia sx={{ height: 140 }} image={avatar} title="green iguana" />
      <CardContent>
        <Box
          sx={{ display: "flex", justifyContent: "space-between" }}
          onClick={() => setCommentsOpen(!commentsOpen)}
        >
          <Typography variant="h5" component="div">
            {username}
          </Typography>
          {commentsOpen ? (
            <ExpandLess sx={{ margin: 0 }} />
          ) : (
            <ExpandMore sx={{ margin: 0 }} />
          )}
        </Box>
        <Collapse in={commentsOpen} timeout="auto" unmountOnExit>
          <Typography gutterBottom variant="body2" color="text.secondary">
            {email}
          </Typography>
          <Typography variant="body2">{description}</Typography>
        </Collapse>
      </CardContent>
      <CardActions>
        {/* <Button size="small">See Posts</Button> */}
        {!!id && (
          <Button onClick={() => nav(`/users/${id}`)} size="small">
            See Profile
          </Button>
        )}
      </CardActions>
    </Card>
  );
};
export default UserProfile;
