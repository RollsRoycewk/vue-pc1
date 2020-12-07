import { reqGetCartList, reqGetAddToCart } from "@api/shopcart";

export default {
  state: {
    shopCartAllList: [],
  },
  getters: {},
  actions: {
    // 获取所有购物车数据
    async getCartList({ commit }) {
      const shopCartAllList = await reqGetCartList();
      commit("GET_CART_LIST", shopCartAllList);
    },
    // 添加购物车功能
    async getAddToCart({ commit }, { skuId, skuNum }) {
      const shopCartAllList = await reqGetAddToCart(skuId, skuNum);
      console.log(commit, shopCartAllList);
    },
  },
  mutations: {
    GET_CART_LIST(state, shopCartAllList) {
      state.shopCartAllList = shopCartAllList;
    },
  },
};
