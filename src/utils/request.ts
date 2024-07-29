import axios from 'axios';
import { showLoading, hideLoading } from '../components/loading';
import { message } from './AntdGlobal';
import { Result } from '@/types/api';
import storage from './storage';
import env from '../config';

const instance = axios.create({
  baseURL: '/api',
  timeout: 8000,
  timeoutErrorMessage: '请求超时，请稍后再试',
  withCredentials: true
});

instance.interceptors.request.use(
  (config: any) => {
    if (config.showLoading) showLoading();
    const token = storage.get('token');
    if (token) {
      config.headers.Authorization = token;
    }

    if (env.mock) {
      config.baseURL = env.mockApi;
    } else {
      config.baseURL = env.baseApi;
    }
    return {
      ...config
    };
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response: any) => {
    const data: Result = response.data;
    hideLoading();
    if (data.code === 401) {
      // ...Todo
    } else if (data.code != 0) {
      // 将错误处理抛出到页面处理
      if (response.config.showError === false) {
        return Promise.resolve(data);
      } else {
        message.error(data.msg);
        return Promise.reject(data);
      }
    }
    return data.data;
  }
  // error => {
  // ...Todo
  // }
);

interface IConfig {
  showLoading?: boolean;
  showError?: boolean;
}

export default {
  get<T>(url: string, params?: object, options: IConfig = { showLoading: true, showError: true }) {
    return instance.get<T>(url, { params, ...options });
  },
  post<T>(url: string, params?: object, options: IConfig = { showLoading: true, showError: true }): Promise<T> {
    return instance.post(url, { params, ...options });
  }
};
