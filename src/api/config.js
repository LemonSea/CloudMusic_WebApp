import axios from 'axios';

export const baseUrl = 'http://192.168.1.103:3300';

// axios的实例及拦截器配置
const axiosInstance = axios.create({
  baseURL: baseUrl
});

// 响应拦截器
axiosInstance.interceptors.response.use(
  res => res.data,
  err => {
    console.log(err, "网络错误");
  }
);

export {
  axiosInstance
};