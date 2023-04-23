import axios from "axios";
import { BASE_URL } from "../constants";
import { IResponse } from "./interfaces";

interface IUser {
  id: string;
  username: string;
  email: string;
  avatar: string;
  description: string;
}
interface IUsersList {
  list: IUser[];
  page: number;
  perPage: number;
}
interface IUsersReq {
  page: number;
  perPage: number;
}
export const UsersListFetcher = ({
  page,
  perPage,
}: IUsersReq): Promise<IResponse<IUsersList>> => {
  return axios.get(`${BASE_URL}users?page=${page}&perPage=${perPage}`);
};
export const UserFetcher = ({
  userId,
}: {
  userId: string;
}): Promise<IResponse<IUser>> => {
  return axios.get(`${BASE_URL}users/${userId}`);
};
