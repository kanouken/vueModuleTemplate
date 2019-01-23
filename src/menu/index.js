/**
 * 向外层暴露菜单
 * 只支持2级路由 2级菜单
 * @type {*[]}
 */
import myRouters from "../router";

export function menus() {
  const myMenus = [];
  myRouters.forEach(router => {
    if (router.meta && router.meta.type == 1) {
      const menu = {
        name: router.meta.title,
        icon: router.meta.icon,
        path: router.path
      };
      //submenus
      if (router.children) {
        const children = [];
        router.children.forEach(child => {
          if (child.meta.type == 2) {
            children.push({
              name: child.meta.title,
              icon: child.meta.icon,
              path: router.path + "/" + child.path
            });
          }
        });
        menu.children = children;
      }
      myMenus.push(menu);
    }
  });
  return myMenus;
}

