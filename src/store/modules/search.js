import { reqProductList } from "@api/search";

export default {
  state: {
    productList: {
      trademarkList: [],
      attrsList: [],
      goodsList: [],
    },
  },
  getters: {
    trademarkList(state) {
      return state.productList.trademarkList;
    },
    attrsList(state) {
      return state.productList.attrsList;
    },
    goodsList(state) {
      return state.productList.goodsList;
    },
  },
  actions: {
    async getProductList({ commit }, data = {}) {
      console.log(777);
      const productList = await reqProductList(data);
      console.log(productList);
      commit("GET_PRODUCT_LIST", productList);
    },
  },
  mutations: {
    GET_PRODUCT_LIST(state, productList) {
      state.productList = productList;
    },
  },
};
