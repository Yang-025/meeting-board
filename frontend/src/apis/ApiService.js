/**
 * 簡單請求
（1) 请求方法是以下三种方法之一：
  HEAD
  GET
  POST
（2）HTTP的头信息不超出以下几种字段：
  Accept
  Accept-Language
  Content-Language
  Last-Event-ID
  Content-Type：只限于三个值application/x-www-form-urlencoded、multipart/form-data、text/plain

 */

import axios from 'axios';
// import httpAdapter from 'axios/lib/adapters/http';
import AppConfig from '~~config';

const API_CONFIG = {
  baseURL: AppConfig.apiDomain,
  timeout: 10000
  // validateStatus: status => (status >= 200 && status <= 500),
};


// class AxiosApiClient {
//   constructor() {
//     this.axios = axios.create(API_CONFIG);
//   }

//   // setHeader(key, value) {
//   //   // 變成全局的設定，不能取消
//   //   this.axios.defaults.headers.common[key] = value;
//   // }

//   instance() {
//     return this.axios;
//   }

//   // withToken = true 要帶上Authorization的header
//   mergeHeaders(headers, withToken) {
//     let finalHeader = {};
//     if (withToken) {
//       // TODO check token
//       const token = '1qaz2wsx3edc4rfv5tgb6yhn7ujm8ik,9ol.0p;/1qaz2wsx3edc4rfv5tgb6yhn7ujm8ik,9ol.0p;/';
//       if (token) {
//         finalHeader = {
//           ...finalHeader,
//           Authorization: token
//         };
//       }
//     }

//     if (headers) {
//       finalHeader = {
//         ...finalHeader,
//         ...headers
//       };
//     }
//     return finalHeader;
//   }

//   // optionsConfig: {params, headers, timeout.....}
//   get(url, optionsConfig = { withToken: true }) {
//     const { withToken, headers, ...args } = optionsConfig;
//     return this.axios({
//       method: 'get',
//       url,
//       headers: this.mergeHeaders(headers, withToken),
//       ...args
//     }).catch(this.handleApiError);
//   }

//   post(url, optionsConfig = { withToken: true }) {
//     const { withToken, headers, data, ...args } = optionsConfig;
//     return this.axios({
//       method: 'post',
//       url,
//       data,
//       headers: this.mergeHeaders(headers, withToken),
//       ...args
//     }).catch(this.handleApiError);
//   }

//   delete(url, optionsConfig = { withToken: true }) {
//     const { withToken, headers, data, ...args } = optionsConfig;
//     return this.axios({
//       method: 'delete',
//       url,
//       data,
//       headers: this.mergeHeaders(headers, withToken),
//       ...args
//     }).catch(this.handleApiError);
//   }

//   put(url, optionsConfig = { withToken: true }) {
//     const { withToken, headers, data, ...args } = optionsConfig;
//     return this.axios({
//       method: 'put',
//       url,
//       data,
//       headers: this.mergeHeaders(headers, withToken),
//       ...args
//     }).catch(this.handleApiError);
//   }

//   patch(url, optionsConfig = { withToken: true }) {
//     const { withToken, headers, data, ...args } = optionsConfig;
//     return this.axios({
//       method: 'patch',
//       url,
//       data,
//       headers: this.mergeHeaders(headers, withToken),
//       ...args
//     }).catch(this.handleApiError);
//   }

//   handleApiError(error) {
//     // TODO 這裡可以發aciton，或是把錯誤訊息統一做處理

//     // if parsing error
//     if (!error.response) {
//       console.error(error.stack);
//       throw new Error(`Unexpected Error: ${error.message}`);
//     }

//     throw error;
//   }
// }

// export default new AxiosApiClient();

// // other method: 沒有包成function的方式
const axiosInstance = axios.create(API_CONFIG);
const ApiService = {
  instance: axiosInstance,

  // withToken = true 要帶上Authorization的header
  mergeHeaders(headers, withToken) {
    let finalHeader = {};
    if (withToken) {
      // TODO check token
      const token = '1qaz2wsx3edc4rfv5tgb6yhn7ujm8ik,9ol.0p;/1qaz2wsx3edc4rfv5tgb6yhn7ujm8ik,9ol.0p;/';
      if (token) {
        finalHeader = {
          ...finalHeader,
          Authorization: token
        };
      }
    }

    if (headers) {
      finalHeader = {
        ...finalHeader,
        ...headers
      };
    }
    return finalHeader;
  },

  // optionsConfig: {params, headers, timeout.....}
  get(url, optionsConfig = {}) {
    const { withToken = true, headers, ...args } = optionsConfig;
    return this.instance({
      method: 'get',
      url,
      headers: this.mergeHeaders(headers, withToken),
      ...args
    }).catch(this.handleApiError);
  },

  post(url, optionsConfig = {}) {
    const { withToken = true, headers, data, ...args } = optionsConfig;
    return this.instance({
      method: 'post',
      url,
      data,
      headers: this.mergeHeaders(headers, withToken),
      ...args
    }).catch(this.handleApiError);
  },

  delete(url, optionsConfig = {}) {
    const { withToken = true, headers, data, ...args } = optionsConfig;
    return this.instance({
      method: 'delete',
      url,
      data,
      headers: this.mergeHeaders(headers, withToken),
      ...args
    }).catch(this.handleApiError);
  },

  put(url, optionsConfig = {}) {
    const { withToken = true, headers, data, ...args } = optionsConfig;
    return this.instance({
      method: 'put',
      url,
      data,
      headers: this.mergeHeaders(headers, withToken),
      ...args
    }).catch(this.handleApiError);
  },

  patch(url, optionsConfig = {}) {
    const { withToken = true, headers, data, ...args } = optionsConfig;
    return this.instance({
      method: 'patch',
      url,
      data,
      headers: this.mergeHeaders(headers, withToken),
      ...args
    }).catch(this.handleApiError);
  },

  handleApiError(error) {
    // TODO 這裡可以發aciton，或是把錯誤訊息統一做處理

    // if parsing error
    if (!error.response) {
      // console.error(error.stack);
      throw new Error(`Unexpected Error: ${error.message}`);
    }

    throw error;
  },
};

export default ApiService;


// const axiosInstance = axios.create(API_CONFIG);
// const apiClient = {
//   instance: axiosInstance,
//   get: axiosInstance.get,
//   post: axiosInstance.post,
//   delete: axiosInstance.delete,
//   put: axiosInstance.put,
//   patch: axiosInstance.patch,
// };
// export default apiClient;

// ref
// 參考架構
// https://github.com/letsdoitworld/World-Cleanup-Day/blob/a1e678de01269e897831475aea88b3084ee78713/mobile-app/src/services/Api.js
// https://github.com/abereghici/movie-database-react/blob/487a56b06b01f80a3a2d026626701c8a618f2341/src/api/index.js
// https://github.com/itsrimzz1/testApp-expo/blob/48f21ddf815ea76c9d4a0e6c0e83924361623fec/src/apiService.js
// https://github.com/kostyanet/mobx-spa/blob/789350545375f4d157866955e9e2640d0d0fd0ee/src/services/api.service.js
// https://github.com/tiezo/anon_fl_frontend/blob/4587d568283b0a284eaae50dfedd63b73a513d5f/src/api/client.js
// https://github.com/tiezo/anon_fl_frontend/blob/4587d568283b0a284eaae50dfedd63b73a513d5f/src/api/resources.js

// https://github.com/innowatio/iwapp/blob/4cc799528a9b121c51dcd1796cc1f658254cd348/app/lib/axios.js
// https://github.com/keita-nishimoto/aws-serverless-prototype
// https://github.com/qiaoyixuan/blog/blob/113544a7802b5e346b97a81b90eb01688b6b3961/public/app/apis/Client.js
