import { rest } from "msw";

export const userListGet = rest.get(
  "/users?page=1&perPage=5",
  (req, res, ctx) => {
    let response;
    response = {
      status: "OK",
      data: {
        list: [
          {
            id: 1,
            username: "mahdi",
            email: "okhravi",
            avatar:
              "https://www.gannett-cdn.com/presto/2021/03/22/NRCD/9d9dd9e4-e84a-402e-ba8f-daa659e6e6c5-PhotoWord_003.JPG",
            description: "some description",
          },
          {
            id: 2,
            username: "mahdi",
            email: "okhravi",
            avatar:
              "https://www.gannett-cdn.com/presto/2021/03/22/NRCD/9d9dd9e4-e84a-402e-ba8f-daa659e6e6c5-PhotoWord_003.JPG",
            description: "some description",
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
export const userGet = rest.get("/users/1", (req, res, ctx) => {
  let response;

  response = {
    status: "OK",
    data: {
      username: "mahdi",
      email: "okhravi",
      avatar:
        "https://www.gannett-cdn.com/presto/2021/03/22/NRCD/9d9dd9e4-e84a-402e-ba8f-daa659e6e6c5-PhotoWord_003.JPG",
      description: "some description",
    },
  };

  return res(
    // Respond with a 200 status code
    ctx.json(response)
  );
});
export const userPost = rest.post("/register", (req, res, ctx) => {
  return res(
    // Respond with a 200 status code
    ctx.json({
      status: "ok",
      data: {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
      },
    })
  );
});
