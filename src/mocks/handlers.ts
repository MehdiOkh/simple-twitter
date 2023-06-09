// src/mocks/handlers.js
import { rest } from "msw";
import { loginApi } from "./apis/loginApi";
import { userGet, userListGet, userPost } from "./apis/usersApi";
import {
  postCommentGet,
  postGet,
  postPost,
  postsListGet,
} from "./apis/postApi";
const handlers = [
  loginApi,
  userListGet,
  userGet,
  userPost,
  postsListGet,
  postCommentGet,
  postGet,
  postPost,
  rest.get("/user", (req, res, ctx) => {
    // Check if the user is authenticated in this session
    const isAuthenticated = sessionStorage.getItem("is-authenticated");
    if (!isAuthenticated) {
      // If not authenticated, respond with a 403 error
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: "Not authorized",
        })
      );
    }
    // If authenticated, return a mocked user details
    return res(
      ctx.status(200),
      ctx.json({
        username: "admin",
      })
    );
  }),
];
export default handlers;
