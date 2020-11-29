import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home";
import Login from "../views/Login";
import Register from "../views/Register";
import Search from "../views/Search";

const push = VueRouter.prototype.push;
const replace = VueRouter.prototype.replace;

VueRouter.prototype.push = function(location, onComplete, onAbort = () => {}) {
  return push.call(this, location, onComplete, onAbort);
};
VueRouter.prototype.replace = function(
  location,
  onComplete,
  onAbort = () => {}
) {
  return replace.call(this, location, onComplete, onAbort);
};
Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/login",
      component: Login,
      meta: {
        footerHide: true,
      },
    },
    {
      path: "/register",
      component: Register,
      meta: {
        footerHide: true,
      },
    },
    {
      name: "search",
      path: "/search/:searchText?",
      component: Search,
    },
  ],
});
