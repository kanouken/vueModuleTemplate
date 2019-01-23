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
    name: "{{moduleKey}}Index",
    meta: { title: "首页", icon: "el-icon-news", type: 0 }
  },

  {
    path: "level1",
    component: layout,
    name: "{{moduleKey}}Level1",
    meta: { title: "一级菜单", icon: "el-icon-news", type: 1 },
    children: [
      {
        path: "level2",
        component: () =>
          import("{{name}}/src/views/foo/index.vue"),
        name: "{{moduleKey}}Level2",
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
