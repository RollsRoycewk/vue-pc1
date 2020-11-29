import axiosRequest from "@utils/axiosRequest";

// 发送登录请求
export const asyncLogin = function({ phone, password }) {
  return axiosRequest({
    method: "POST",
    url: "/user/passport/login",
    data: {
      phone,
      password,
    },
  });
};
