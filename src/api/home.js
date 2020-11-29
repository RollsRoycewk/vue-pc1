import axiosRequest from "@utils/axiosRequest";

export const getBaseCategoryList = () => {
  return axiosRequest({
    method: "GET",
    url: "/product/getBaseCategoryList",
  });
};
