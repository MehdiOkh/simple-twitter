import axios from "axios";
import { BASE_URL } from "../constants";
import { IResponse } from "./interfaces";

export interface IPost {
  id: string;
  username: string;
  text: string;
  avatar: string;
  issueDate: string;
}
interface IPostList {
  list: IPost[];
  page: number;
  perPage: number;
}
interface IPostReq {
  page: number;
  perPage: number;
}
interface ICommentsReq {
  postId: string;
  page: number;
  perPage: number;
}

export const PostListFetcher = ({
  page,
  perPage,
}: IPostReq): Promise<IResponse<IPostList>> => {
  return axios.get(`${BASE_URL}posts?page=${page}&perPage=${perPage}`);
};
export const PostFetcher = ({
  postId,
}: {
  postId: string;
}): Promise<IResponse<IPost>> => {
  return axios.get(`${BASE_URL}posts/${postId}`);
};
export const SubmitPostFetcher = ({
  text,
}: {
  text: string;
}): Promise<IResponse<null>> => {
  return axios.post(`${BASE_URL}posts/`, { text });
};
export const PostCommentsFetcher = ({
  postId,
  page,
  perPage,
}: ICommentsReq): Promise<IResponse<IPostList>> => {
  return axios.get(
    `${BASE_URL}posts/${postId}/comments?page=${page}&perPage=${perPage}`
  );
};
