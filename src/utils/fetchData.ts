import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export default async function fetchData(
  url: string,
  params: AxiosRequestConfig
): Promise<AxiosResponse> {
  return axios({
    timeout: 10000,
    withCredentials: true,
    baseURL: 'localhost:8000',
    url,
    ...params,
  });
}
