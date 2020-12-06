import { reqGetCartList } from "@api/shopcart";

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
  },
  mutations: {
    GET_CART_LIST(state, shopCartAllList) {
      state.shopCartAllList = shopCartAllList;
    },
  },
};
