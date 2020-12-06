import axiosRequest from "@utils/axiosRequest";

// 获取购物车列表
export const reqGetCartList = () => {
  return axiosRequest({
    method: "GET",
    url: "/cart/cartList",
  });
};

// 对购物车已有物品进行数量改动
export const reqGetAddToCart = (skuId, skuNum) => {
  return axiosRequest({
    method: "POST",
    url: `/cart/addToCart/${skuId}/${skuNum}`,
  });
};

// 切换商品选中状态
export const reqGetCheckCart = (skuID, isChecked) => {
  return axiosRequest({
    method: "GET",
    url: `/cart/checkCart/${skuID}/${isChecked}`,
  });
};

// 删除购物车商品
export const reqGetDeleteCart = (skuId) => {
  return axiosRequest({
    method: "DELETE",
    url: `/cart/deleteCart/${skuId}`,
  });
};
