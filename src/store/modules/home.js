import { reqBannersList, getBaseCategoryList } from "@api/home";

export default {
  state: {
    navData: [],
    BannersList: [],
  },
  getters: {},
  actions: {
    async getNavData({ commit }) {
      const navData = await getBaseCategoryList();
      commit("GET_NAV_DATA", navData);
    },
    async getBannersData({ commit }) {
      console.log(111);
      const bannersData = await reqBannersList();
      commit("GET_BANNERS_DATA", bannersData);
    },
  },
  mutations: {
    GET_NAV_DATA(state, navData) {
      state.navData = navData;
    },
    GET_BANNERS_DATA(state, bannersData) {
      state.BannersList = bannersData;
    },
  },
};
