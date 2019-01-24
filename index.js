import router from "./src/router";
import setting from "./src/bootstrap";
import {menus} from "./src/menu";

//路由 系统配置 菜单

/**
 * 添加路由到模块中
 * @param _router  路由配置
 * @param _target 上级路由
 */
export function addRouter(_router, _target) {
  this.router.forEach(r => {
    if (r.name == _target) {
      if (!r.children) {
        r.children = [];
      }
      r.children.push(_router);
    }
  });
}

export { router, setting, menus };
