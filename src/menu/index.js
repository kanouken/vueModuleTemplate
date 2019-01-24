/**
 * 根据路由配置生成系统菜单
 * @see src/router
 * @type {*[]}
 */
import myRouters from "../router";

export function menus() {
    const myMenus = [];
    myRouters.forEach(router => {
        if (router.meta && router.meta.menu) {
            const menu = {
                name: router.meta.title,
                icon: router.meta.icon,
                path: router.path
            };
            //submenus
            if (router.meta && router.meta.hasChild) {
                const children = [];
                router.children.forEach(child => {
                    if (child.meta.menu) {
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
        } else {
            if (router.meta && router.meta.hasChild) {
                let menus = router.children.filter(r => r.meta && r.meta.menu);
                if (menus && menus.length > 0) {
                    //jump to level one
                    const menu = {
                        name: menus[0].meta.title,
                        icon: menus[0].meta.icon,
                        path: router.path + "/" + menus[0].path,
                        children: []
                    };
                    myMenus.push(menu);
                }
            }
        }
    });
    return myMenus;
}
