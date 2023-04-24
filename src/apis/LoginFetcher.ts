import axios, { AxiosResponse } from "axios";
import { IResponse } from "./interfaces";
import { BASE_URL } from "../constants";

interface ILoginRes {
  token: string;
}
interface IRegisterReq {
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}
interface ILoginReq {
  emailOrUsername: string;
  password: string;
}
const LoginFetcher = ({
  emailOrUsername,
  password,
}: ILoginReq): Promise<IResponse<ILoginRes>> => {
  return axios.post(`${BASE_URL}login/`, { emailOrUsername, password });
};
export const RegisterFetcher = ({
  email,
  password,
  username,
  firstName,
  lastName,
}: IRegisterReq): Promise<IResponse<ILoginRes>> => {
  return axios.post(`${BASE_URL}register/`, {
    username,
    email,
    firstName,
    lastName,
    password,
  });
};
export const UpdateProfileFetcher = ({
  email,
  password,
  username,
  firstName,
  lastName,
}: IRegisterReq): Promise<IResponse<ILoginRes>> => {
  return axios.post(`${BASE_URL}upadte-profile/`, {
    username,
    email,
    firstName,
    lastName,
    password,
  });
};
export default LoginFetcher;
