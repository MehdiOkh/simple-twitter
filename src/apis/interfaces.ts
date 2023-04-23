import { AxiosResponse } from "axios";

export interface IServerResponse<T> {
  status: string;
  data: T;
  error?: string;
}
export interface IResponse<T> extends AxiosResponse {
  data: IServerResponse<T>;
}
