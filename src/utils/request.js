/**
 * 网络请求工具包
 */
import axios from "axios";
const baseUrl = process.env.VUE_APP_BASE_API
const service = axios.create({
  baseURL: baseUrl, // api的base_url
  timeout: 50000 // 请求超时时间
});

service.interceptors.request.use(
  config => {
    config.headers["Authorization"] = bootstrap.token;
    return config;
  },
  error => {
    return error;
  }
);

service.interceptors.response.use(
  response => {
    if (response && response.data) {
      const res = response.data;
      if (res.resultCode != "00000") {
        if (res.resultCode == "00020" || res.resultCode == "00021") {
          return response.data;
        } else {
          return response.data;
        }
      } else {
        return response.data;
      }
    } else {
      return null;
    }
  },
  error => {
    console.log(error.message);
    console.log("error");
    return error;
  }
);

export default service;
