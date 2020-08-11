import axios from "axios";

// 设置请求超时
axios.defaults.timeout = 10000;
// 请求头 参数设置  application/json -> json对象的形式,   application/x-www-form-urlencoded -> 转换为key=value&a = b的格式
axios.defaults.headers.post["Content-Type"] = "application/json; charset=utf-8";
// 设置cross跨域 并设置访问权限 允许跨域携带cookie信息
axios.defaults.withCredentials = true;

// 设置 axios拦截请求
axios.interceptors.request.use(
  config => {
    console.log("拦截：loading...");
    // Loading.open('加载中...')
    // 判断localStorage是否存在token，如果存在的话，则每个http header都加上token
    // if (localStorage.getItem("access_token")) {
    //   config.headers.token = `${localStorage.getItem("access_token")}`;
    // }
    return config;
  },
  error => {
    console.log("axios 拦截error: ", error);
    return Promise.reject(error);
  }
);
// 设置 axios拦截响应
axios.interceptors.response.use(
  response => {
    // Loading.close()
    // -------------------- 数据有误提示信息-------------------
    // const _responseState = response.data;
    // 登录超时Toast提醒
    // console.log(_responseState);
    // if (_responseState.code === 100401) {
    //   Toast({
    //     msg: _responseState.msg,
    //     timeout: 2000,
    //     callback: () => {
    //       // 超时后 清除 存储信息
    //       // localStorage.removeItem('access_token')
    //       // sessionStorage.removeItem('userInfo')
    //       localStorage.clear(); // 清空所有
    //       sessionStorage.clear(); // 清空所有
    //     }
    //   });
    // }
    return response;
  },
  error => {
    // -------------------- 服务有误提示信息-------------------
    // if (error.response) {
    //   switch (error.response.status) {
    //     case 500 || 504:
    //       Toast({msg: '网络异常，请检查...', timeout: 2000})
    //       break
    //   }
    // }
    console.log("服务错误：" + error);
    // 服务错误 关掉加载层
    // Loading.close();
    return Promise.reject(error);
  }
);

// 封装ajax接口请求
export default function ajax(url, data = {}, type = "GET", onTip = "true") {
  return new Promise(function(resolve, reject) {
    if (onTip) {
      // Loading.open("加载中...");
      console.log("loading加载中...");
    }
    // 执行异步ajax请求
    let promise;
    if (type === "GET") {
      // 准备url query参数数据
      let dataStr = ""; // 数据拼接字符串
      Object.keys(data).forEach(key => {
        dataStr += key + "=" + data[key] + "&";
      });
      if (dataStr !== "") {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf("&"));
        url = url + "?" + dataStr;
      }
      // 发送get请求
      promise = axios.get(url);
    } else if (type === "POST") {
      // 发送post请求
      promise = axios.post(url, data);
    } else if (type === "DELETE") {
      promise = axios.delete(url);
    }
    promise
      .then(function(response) {
        // 成功了调用resolve()
        if (response) {
          if (onTip) {
            console.log("成功->调用关闭loading");
            // Loading.close();
          }
          console.log(
            `ajax success %c ${response.config.url.split("/")[3]}`,
            "color:red"
          );
          resolve(response.data);
        }
      })
      .catch(function(error) {
        if (onTip) {
          // Loading.close();
          console.log("Loading.close()调用关闭loading");
        }
        console.log("网络请求失败");
        // 失败了调用reject()
        reject(error);
      });
  });
}
