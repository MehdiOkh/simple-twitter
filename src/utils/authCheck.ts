import axios from "axios";

export const isLoggedIn = () => {
  console.log("auth");
  if (!!axios.defaults.headers["Authorization"]) return true;
  return false;
};
