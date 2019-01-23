import router from "cyberway-msf-frontend-web-payment/src/router";
import setting from "cyberway-msf-frontend-web-payment/src/bootstrap";
import {menus} from "cyberway-msf-frontend-web-payment/src/menu";

//路由 系统配置 菜单

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
