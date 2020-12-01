import axiosRequest from "@utils/axiosRequest";

/**
 * 获取搜索商品列表
 */

export const reqProductList = (data) => {
  return axiosRequest({
    method: "POST",
    url: "/list",
    data,
  });
};
