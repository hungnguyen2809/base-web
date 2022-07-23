import axios, { AxiosRequestConfig } from 'axios';
import merge from 'lodash/merge';
import QueryString from 'qs';
import { getStorageData, STORAGE_KEY } from 'utils/storage';

axios.defaults.timeout = 15000;
axios.defaults.timeoutErrorMessage = 'Kết nối không ổn định. Vui lòng thử lại sau';
axios.defaults.paramsSerializer = (params): string => QueryString.stringify(params, { indices: false });

const configure = (config: AxiosRequestConfig): AxiosRequestConfig => {
  const token = getStorageData<string>(STORAGE_KEY.ACCESS_TOKEN);

  const targetConfig: AxiosRequestConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return merge(config, targetConfig);
};

/** Request API */
export const apiApp = axios.create({
  baseURL: '',
});

apiApp.interceptors.request.use(
  (config) => Promise.resolve(configure(config)),
  (error) => Promise.reject(error)
);
