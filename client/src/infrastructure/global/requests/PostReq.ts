import { AxiosError } from 'axios';
import { iResponseAllPosts, iResponseSinglePost } from '../../common/types';
import API from '../axios/axios';

export default class PostReq {
  public static async getAllPosts({
    page,
    limit,
    search,
  }: {
    page?: number | undefined;
    limit?: number | undefined;
    search?: string | undefined;
  }): Promise<iResponseAllPosts> {
    try {
      const response = await API.get(
        `/posts${limit ? `?limit=${limit}` : ''}${page ? `&page=${page}` : ''}${
          search ? (limit ? `&search=${search}` : `?search=${search}`) : ''
        }`,
      );
      return response.data;
    } catch (error) {
      throw new Error((error as AxiosError)?.response?.data?.error);
    }
  }

  public static async getPostById(id: string): Promise<iResponseSinglePost> {
    try {
      const response = await API.get(`/posts/${id}`);
      return response.data;
    } catch (error) {
      throw new Error((error as AxiosError)?.response?.data?.error);
    }
  }
}
