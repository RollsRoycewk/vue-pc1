import axiosRequest from "@utils/axiosRequest";
import mockRequest from "@utils/mockRequest";

export const getBaseCategoryList = () => {
  return axiosRequest({
    method: "GET",
    url: "/product/getBaseCategoryList",
  });
};

/**
 * 轮播图mock数据请求
 */

export const reqBannersList = () => {
  return mockRequest({
    method: "GET",
    url: "/banners",
  });
};

/**
 * floors数据请求
 */
export const reqFloorsList = () => {
  return mockRequest({
    method: "GET",
    url: "/floors",
  });
};
