import { List, Divider, Container, Grid } from "@mui/material";
import Post from "../components/Post";
import UserProfile from "../components/UserProfile";
import { useQuery } from "@tanstack/react-query";
import { UsersListFetcher } from "../apis/usersFetcher";
import { PostListFetcher } from "../apis/postFetcher";
import { useEffect } from "react";
import { isLoggedIn } from "../utils/authCheck";
import { useNavigate } from "react-router-dom";
import NewPost from "../components/NewPost";

const Main = () => {
  const nav = useNavigate();
  if (!isLoggedIn()) nav("/login");

  const users = useQuery({
    queryKey: ["users"],
    queryFn: () => UsersListFetcher({ page: 1, perPage: 5 }),
  });
  const posts = useQuery({
    queryKey: ["posts"],
    queryFn: () => PostListFetcher({ page: 1, perPage: 5 }),
  });
  return (
    <>
      <Grid container spacing={4} sx={{ padding: "8px" }}>
        <Grid item xs={8}>
          <List sx={{ width: "100%", bgcolor: "background.paper" }}>
            {posts.data?.data.data.list.map((post) => {
              console.log(posts.data);
              return (
                <Post
                  id={post.id}
                  username={post.username}
                  text={post.text}
                  avatar={post.avatar}
                  issueDate={post.issueDate}
                />
              );
            })}
          </List>
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <List sx={{ width: "100%", bgcolor: "background.paper" }}>
            {users.data?.data.data.list.map((user) => {
              return (
                <UserProfile
                  id={user.id}
                  username={user.username}
                  email={user.email}
                  description={user.description}
                  avatar={user.avatar}
                />
              );
            })}
          </List>
        </Grid>
      </Grid>
      <NewPost />
    </>
  );
};
export default Main;
