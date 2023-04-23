import { rest } from "msw";

export const postsListGet = rest.get(
  "/posts?page=1&perPage=5",
  (req, res, ctx) => {
    let response;
    response = {
      status: "OK",
      data: {
        list: [
          {
            id: 1,
            username: "mahdi okhravi",
            text: "hello world",
            avatar: "xxx",
            issueDate: "2023/12/13",
          },
          {
            id: 2,
            username: "mahdi okhravi",
            text: "hello world",
            avatar: "xxx",
            issueDate: "2023/12/13",
          },
          {
            id: 3,
            username: "mahdi okhravi",
            text: "hello world",
            avatar: "xxx",
            issueDate: "2023/12/13",
          },
          {
            id: 4,
            username: "mahdi okhravi",
            text: "hello world",
            avatar: "xxx",
            issueDate: "2023/12/13",
          },
          {
            id: 5,
            username: "mahdi okhravi",
            text: "hello world",
            avatar: "xxx",
            issueDate: "2023/12/13",
          },
        ],
        page: 1,
        perPage: 5,
      },
    };
    return res(
      // Respond with a 200 status code
      ctx.json(response)
    );
  }
);

export const postGet = rest.get("/posts/1", (req, res, ctx) => {
  let response;
  if (req.headers.get("Authorization")) {
    response = {
      status: "OK",
      error: "you already logged in",
    };
  } else {
    response = {
      status: "OK",
      data: {
        id: 1,
        username: "mahdi okhravi",
        text: "hello world",
        avatar: "xxx",
        issueDate: "2023/12/13",
      },
    };
  }
  return res(
    // Respond with a 200 status code
    ctx.json(response)
  );
});
export const postPost = rest.post("/posts", (req, res, ctx) => {
  return res(
    // Respond with a 200 status code
    ctx.status(200)
  );
});
export const postCommentGet = rest.get(
  "/posts/1/comments?page=1&perPage=5",
  (req, res, ctx) => {
    let response;

    response = {
      status: "OK",
      data: {
        list: [
          {
            id: 1,
            username: "mahdi okhravi",
            text: "hello world",
            avatar: "xxx",
            issueDate: "2023/12/13",
          },
          {
            id: 2,
            username: "mahdi okhravi",
            text: "hello world",
            avatar: "xxx",
            issueDate: "2023/12/13",
          },
          {
            id: 3,
            username: "mahdi okhravi",
            text: "hello world",
            avatar: "xxx",
            issueDate: "2023/12/13",
          },
          {
            id: 4,
            username: "mahdi okhravi",
            text: "hello world",
            avatar: "xxx",
            issueDate: "2023/12/13",
          },
        ],
      },
    };
    return res(
      // Respond with a 200 status code
      ctx.json(response)
    );
  }
);
