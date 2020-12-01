import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import store from "./store";
import "./styles/resert.css";
import "./plugins/element.js";
import "../src/mock/mockServer";
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
