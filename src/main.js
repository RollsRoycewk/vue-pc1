import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import store from "./store";
import "./styles/resert.css";
import "./plugins/element.js";
import "../src/mock/mockServer";

// 引入图标字体样式
import "./styles/iconfont.css";
// 轮播图样式
import "swiper/swiper-bundle.css";
Vue.config.productionTip = false;

new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
