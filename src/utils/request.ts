import axios from "axios";

const service = axios.create({
  baseURL: "http://apis.imooc.com/api/",
  timeout: 5000,
});

const icode = "48E751A72884E66B";
service.interceptors.request.use((config) => {
  config.params = { ...config.params, icode };
  if (config.data instanceof FormData) {
    config.data.append("icode", icode);
  } else {
    config.data = { ...config.data, icode };
  }
  return config;
});

export default service;
