import { reqDetailList } from "@api/detail";

export default {
  state: {
    pruDetailList: {
      categoryView: {},
      spuSaleAttrList: [],
      skuInfo: {},
    },
  },
  getters: {
    categoryView: (state) => state.pruDetailList.categoryView,
    spuSaleAttrList: (state) => state.pruDetailList.spuSaleAttrList,
    skuInfo: (state) => state.pruDetailList.skuInfo,
  },
  actions: {
    async getDetailList({ commit }, detailNum) {
      const detailList = await reqDetailList(detailNum);
      commit("GET_DETAIL_LIST", detailList);
    },
  },
  mutations: {
    GET_DETAIL_LIST(state, detailList) {
      state.pruDetailList = detailList;
    },
  },
};
