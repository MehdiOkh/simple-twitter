import axios from "axios";

export const isLoggedIn = () => {
  if (!!axios.defaults.headers["Authorization"]) return true;
  return false;
};
