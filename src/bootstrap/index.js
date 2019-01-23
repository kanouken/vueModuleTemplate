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
  basePath: "/"+moduleKey,
  name: "支付管理",
  /**
   * api host
   */
  apiHost: "http://192.168.90.80:8040",
  token:'eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJlMDJiNWI3NTNmZGU0NDMwYjJmYzY3ZDZkZjAxMDlkZSIsImV4cCI6MTU0ODc0MTA1MX0.lYJrI_b3zfidoWRsvQUkrQ5E_-EGwMwhHVsMOPJCoBrzWrwIzZ5DPm-QHArxUNsHtxi1jdgNibNlWj9ewBxRgVJPZdoKlfusV1GZoDerL7gjVhtEij6jE6UaQGNwVwxGwC3OwQeD-QeCyklMcSQ6BPkQzMYYG47yDyJRIdiKkis'
};
export default setting;
