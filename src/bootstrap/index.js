/**
 * 系统名称
 * @type {string}
 */
const moduleKey = "{{moduleKey}}"
const setting = {
    /**
     * 定义模块key 唯一
     */
    moduleKey: moduleKey,
    /**
     * 启动界面
     */
    entryPage: "/{{moduleKey}}/index",
    /**
     * 绑定到主系统后的 contextPath
     */
    basePath: "/" + moduleKey,
    name: "{{moduleName}}",

    /**
     * 在主系统展示 true :表示将功能模块以 子模块的方式注册到 主系统中
     */
    visible: true

};
export default setting;
