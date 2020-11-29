import axios from "axios";

// 进度条
import NProgress from "nprogress";
import "nprogress/nprogress.css";

// 错误提醒
import { Notification } from "element-ui";

const instance = axios.create({
  baseURL: "/api",
});

// 请求拦截器
instance.interceptors.request.use((config) => {
  NProgress.start();
  return config;
});

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    NProgress.done();
    if (response.data.code === 200) {
      return response.data.data;
    }
    const { message } = response.data;
    Notification.error(message);
    return Promise.reject(message);
  },
  (err) => {
    NProgress.done();
    const message = err.message || "网络错误";
    Notification.error(message);
    return Promise.reject(message);
  }
);

export default instance;
