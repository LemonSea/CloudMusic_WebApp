import axios from 'axios';

export const baseUrl = 'http://localhost:3300';

// 创建axios的实例
const axiosInstance = axios.create({
  baseURL: baseUrl
});

// 响应拦截器【响应拦截器的作用是在接收到响应后进行一些操作】
axiosInstance.interceptors.response.use(
  // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
  res => res.data,
  // 服务器状态码不是2开头的的情况
  err => {
    console.log(err, "网络错误");
  }
);

export {
  axiosInstance
};