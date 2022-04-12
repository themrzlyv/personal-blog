import { AxiosError } from 'axios';
import { iResponseAllPosts } from '../../common/types';
import API from '../axios/axios';



export default class PostReq {
  public static async getAllPosts({
    page,
    limit,
  }: {
    page?: number | undefined;
    limit?: number | undefined;
  }): Promise<iResponseAllPosts> {
    try {
      const response = await API.get(
        `/posts${limit ? `?limit=${limit}` : ''}${page ? `&page=${page}` : ''}`,
      );
      return response.data;
    } catch (error) {
      throw new Error((error as AxiosError)?.response?.data?.error);
    }
  }
}
