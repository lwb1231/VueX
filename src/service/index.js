
import axios from 'axios' // 引入axios
axios.defaults.timeout = 10000
// 请求拦截器
axios.interceptors.request.use(
  config => {
    // 每次发送请求之前判断localStorage中是否存在登录的用户信息
    // 如果存在，则统一在http请求的header都加上用户信息，这样后台根据用户信息判断你的登录情况
    // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
    console.log(config)
    return config
  },
  error => {
    return Promise.error(error)
  }
)
// 响应拦截器
axios.interceptors.response.use(
  response => {
    // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
    // 否则的话抛出错误
    if (response.data.code === 1000) {
    // if (response.data.statusCode == '10001') {
    // // 失败时 跳转登录页
    // router.push({
    // path: "/login"
    // });
    // }
      return Promise.resolve(response.data.data)
    } else {
      return Promise.reject(response.data)
    }
  })
export default axios
