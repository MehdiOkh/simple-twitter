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
	perPage?: number;
}
interface ICommentsReq {
	postId: string;
}

export const PostListFetcher = ({
	page = 1,
	perPage = 10,
}: IPostReq): Promise<IResponse<IPostList>> => {
	return axios.get(`${BASE_URL}posts/`, {
		params: {
			page,
			perPage,
		},
	});
};
export const PostFetcher = ({
	postId,
}: {
	postId: string;
}): Promise<IResponse<IPost>> => {
	return axios.get(`${BASE_URL}post/${postId}`);
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
}: ICommentsReq): Promise<IResponse<IPostList>> => {
	return axios.get(`${BASE_URL}post/${postId}/comments`);
};
