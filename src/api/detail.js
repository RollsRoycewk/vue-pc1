import axiosRequest from "@utils/axiosRequest";

export const reqDetailList = (detailId) => {
  return axiosRequest({
    method: "GET",
    url: `/item/${detailId}`,
  });
};
