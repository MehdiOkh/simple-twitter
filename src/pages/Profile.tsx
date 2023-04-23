import { Box } from "@mui/material";
import UserProfile from "../components/UserProfile";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { UserFetcher } from "../apis/usersFetcher";
import { isLoggedIn } from "../utils/authCheck";
import NewPost from "../components/NewPost";

const Profile = () => {
  const { userId } = useParams();
  const nav = useNavigate();
  if (!isLoggedIn()) nav("/login");
  const user = useQuery(["users", userId], () =>
    UserFetcher({ userId: userId || "" })
  );
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {user.isSuccess && (
          <UserProfile
            id={user.data.data.data.id}
            username={user.data.data.data.username}
            email={user.data.data.data.email}
            description={user.data.data.data.description}
            avatar={user.data.data.data.avatar}
          />
        )}
      </Box>
      <NewPost />
    </>
  );
};
export default Profile;
