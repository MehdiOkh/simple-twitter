import { rest } from "msw";

export const loginApi = rest.post("/login", (req, res, ctx) => {
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
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
      },
    };
  }

  return res(
    // Respond with a 200 status code
    ctx.json(response)
  );
});
