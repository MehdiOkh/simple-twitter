import { List, Divider, Container, Grid } from "@mui/material";
import Post from "../components/Post";
import UserProfile from "../components/UserProfile";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { UsersListFetcher } from "../apis/usersFetcher";
import { PostListFetcher } from "../apis/postFetcher";
import { useEffect } from "react";
import { isLoggedIn } from "../utils/authCheck";
import { useNavigate } from "react-router-dom";
import NewPost from "../components/NewPost";
import { useInView } from "react-intersection-observer";
import UpdateProfile from "./UpdateProfile";

const Main = () => {
	const nav = useNavigate();
	if (!isLoggedIn()) nav("/login");

	const users = useQuery({
		queryKey: ["users"],
		queryFn: () => UsersListFetcher({ page: 1, perPage: 5 }),
	});
	const { ref, inView } = useInView();

	const posts = useInfiniteQuery(
		["posts"],
		({ pageParam = 1 }) => PostListFetcher({ page: pageParam }),
		{
			getPreviousPageParam: (firstPage) =>
				firstPage.data.data.page - 1 ?? undefined,
			getNextPageParam: (lastPage) =>
				lastPage.data.data.page + 1 ?? undefined,
		}
	);
	useEffect(() => {
		if (inView) {
			posts.fetchNextPage();
		}
	}, [inView]);
	return (
		<>
			<Grid container spacing={4} sx={{ padding: "8px" }}>
				<Grid item xs={8}>
					<List sx={{ width: "100%", bgcolor: "background.paper" }}>
						{posts.data?.pages.map((page) => {
							return page.data.data.list.map((post) => {
								return (
									<Post
										key={post.id}
										id={post.id}
										username={post.username}
										text={post.text}
										avatar={post.avatar}
										issueDate={post.issueDate}
									/>
								);
							});
						})}
					</List>
					<div ref={ref} />
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
									key={user.id}
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
			<UpdateProfile />
		</>
	);
};
export default Main;
