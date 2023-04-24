import { rest } from "msw";

export const postsListGet = rest.get("/posts", (req, res, ctx) => {
  const page = parseInt(req.url.searchParams.get("page") ?? "1");
  const perPage = req.url.searchParams.get("perPage");
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
          id: 2,
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
          id: 2,
          username: "mahdi okhravi",
          text: "hello world",
          avatar: "xxx",
          issueDate: "2023/12/13",
        },
      ],
      page,
      perPage: 5,
      nextPage: page + 1,
    },
  };
  return res(
    // Respond with a 200 status code
    ctx.json(response)
  );
});

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
export const postCommentGet = rest.get("/posts/1/comments", (req, res, ctx) => {
  const page = parseInt(req.url.searchParams.get("page") ?? "1");
  console.log(page);
  const perPage = req.url.searchParams.get("perPage");
  let response;

  response = {
    status: "OK",
    data: {
      list: [
        {
          id: Math.random().toString(),
          username: "mahdi okhravi1",
          text: "hello world",
          avatar: "xxx",
          issueDate: "2023/12/13",
        },
        {
          id: Math.random().toString(),
          username: "mahdi okhravi2",
          text: "hello world",
          avatar: "xxx",
          issueDate: "2023/12/13",
        },
        {
          id: Math.random().toString(),
          username: "mahdi okhravi3",
          text: "hello world",
          avatar: "xxx",
          issueDate: "2023/12/13",
        },
        {
          id: Math.random().toString(),
          username: "mahdi okhravi4",
          text: "hello world",
          avatar: "xxx",
          issueDate: "2023/12/13",
        },
        {
          id: Math.random().toString(),
          username: "mahdi okhravi5",
          text: "hello world",
          avatar: "xxx",
          issueDate: "2023/12/13",
        },
      ],
    },
    page,
    perPage,
    nextPage: page + 1,
  };
  return res(
    // Respond with a 200 status code
    ctx.json(response)
  );
});
