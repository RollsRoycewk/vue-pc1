import { reqBannersList, getBaseCategoryList, reqFloorsList } from "@api/home";

export default {
  state: {
    navData: [],
    bannersList: [],
    floorsData: [],
  },
  getters: {},
  actions: {
    async getNavData({ commit }) {
      const navData = await getBaseCategoryList();
      commit("GET_NAV_DATA", navData);
    },
    // 获取轮播图数据
    async getBannersData({ commit }) {
      const bannersData = await reqBannersList();
      commit("GET_BANNERS_DATA", bannersData);
    },
    // 获取floors数据
    async getFloorsData({ commit }) {
      const floorsData = await reqFloorsList();
      commit("GET_FLOORS_DATA", floorsData);
    },
  },
  mutations: {
    GET_NAV_DATA(state, navData) {
      state.navData = navData;
    },
    GET_BANNERS_DATA(state, bannersData) {
      state.bannersList = bannersData;
    },
    GET_FLOORS_DATA(state, floorsData) {
      state.floorsData = floorsData;
    },
  },
};
