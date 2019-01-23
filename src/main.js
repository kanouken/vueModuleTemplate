/**
 * 程序入口
 */
//vue
import Vue from "vue";
import Router from "vue-router";
//element ui
import ElementUI from "element-ui";

//router
import appRouter from "./router";
//base style
import "@/assets/styles/index.scss";
import "@/assets/styles/theme/default/index.css";
// main ui
import App from "./App";

//component install
Vue.use(Router);
Vue.use(ElementUI);
Vue.config.productionTip = false;

appRouter.forEach(router => {
  router.path = "/" + router.path;
});

const vueRouter = new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: appRouter
});

new Vue({
  el: "#app",
  router: vueRouter,
  render: h => h(App)
});
