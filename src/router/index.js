/**
 * 模块路由配置
 *
 * meta.menu true 作为菜单展示 false 不展示
 * meta.hasChilid  true 有子菜单（二级菜单） false 没有子菜单
 * meta.title      菜单名字
 * meta.icon       使用图片样式
 *
 * 说明1：关于一级菜单
 *
 * 根据此处路由配置生成菜单，请注意满足条件：拥有子集路由（hasChild:true） 和 menu:false 且 children 属性不为空，此时如果 children中元素
 * meta.menu:true 这个路由对应的菜单将变成一级菜单
 *
 * 说明2： 路由配置只支持 2 层 ，的菜单也只有两层
 */
import layout from "@/views/layout/layout";

const myRouters = [
  {
    path: "index",
    component: layout,
    name: "{{moduleKey}}Index",
    meta: { title: "首页", icon: "el-icon-news", menu: false }
  },

  {
    path: "level1",
    component: layout,
    name: "{{moduleKey}}Level1",
    meta: { title: "一级菜单", icon: "el-icon-news", menu:true ,hasChild:true},
    children: [
      {
        path: "level2",
        component: () =>
          import("{{name}}/src/views/foo/index.vue"),
        name: "{{moduleKey}}Level2",
        meta: { title: "二级菜单", icon: "el-icon-news", menu:true }
      },

    ]
  }
];

/**
 * 默认为每个router 添加需要权限的 meta
 */
myRouters.forEach(router => {
  router.meta["requiresAuth"] = true;
  if (router.children) {
    router.children.forEach(child => (child.meta["requiresAuth"] = true));
  }
});

export default myRouters;
