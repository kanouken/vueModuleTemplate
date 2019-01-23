/**
 * 模块路由配置 通过meta type 来确定是否需要在菜单中展示
 *
 * meta type 0 不显示 1 一级菜单 2 二级菜单
 */
import layout from "@/views/layout/layout";

const myRouters = [
  {
    path: "index",
    component: layout,
    name: "paymentIndex",
    meta: { title: "首页", icon: "el-icon-news", type: 0 }
  },

  {
    path: "level1",
    component: layout,
    name: "paymentLevel1",
    meta: { title: "一级菜单", icon: "el-icon-news", type: 1 },
    children: [
      {
        path: "level2",
        component: () =>
          import("cyberway-msf-frontend-web-payment/src/views/foo/index.vue"),
        name: "paymentLevel2",
        meta: { title: "二级菜单", icon: "el-icon-news", type: 2 }
      },

    ]
  }
];

//check tow level router
myRouters.forEach(router => {
  router.meta["requiresAuth"] = true;
  if (router.children) {
    router.children.forEach(child => (child.meta["requiresAuth"] = true));
  }
});

export default myRouters;
