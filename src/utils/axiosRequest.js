import axios from "axios";

const instance = axios.create({
  baseURL: "/api",
});

// 请求拦截器
instance.interceptors.request.use((config) => {
  return config;
});

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    if (response.data.code === 200) {
      return response.data.data;
    }
    const { message } = response.data;
    return Promise.reject(message);
  },
  (err) => {
    const message = err.message || "网络错误";
    return Promise.reject(message);
  }
);

export default instance;
