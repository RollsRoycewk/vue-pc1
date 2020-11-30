import { getBaseCategoryList } from "@api/home";

export default {
  state: {
    navData: [],
  },
  getters: {},
  actions: {
    async getNavData({ commit }) {
      const navData = await getBaseCategoryList();
      commit("GET_NAV_DATA", navData);
    },
  },
  mutations: {
    GET_NAV_DATA(state, navData) {
      state.navData = navData;
    },
  },
};
