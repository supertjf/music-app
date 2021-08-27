import axios from 'axios'
import qs from 'qs' //qs是一个url参数转化（parse和stringify）的js库。  https://www.npmjs.com/package/qs

const baseUrl = 'http://localhost:3000'

class Initiator {
  constructor(config) {
    const instance = (this.axios = axios.create(config))

    instance.interceptors.request.use(
      req => {
        req.headers['content-type'] = 'application/json'
        if (req.method === 'get') {
          // 如果是get请求，且params是数组类型如arr=[1,2]，则转换成arr=1&arr=2,不转换会显示为arr[]=1&arr[]=2
          req.paramsSerializer = function (params) {
            return qs.stringify(params, { arrayFormat: 'repeat' })
          }
        }
        return req
      },
      err => {
        console.log(err, 'request');
        return Promise.reject(err)
      }
    )

    instance.interceptors.response.use(
      response => {
        // TODO 404 跳转 404 页面 待构建 404页面
        if (response && response.status === 404) {
          return
        }
        // TODO 500 跳转500 页面 待构建 500页面
        if (response && response.status === 500) {
          return
        }
        if (response && response.data && (response.data.respCode === '9999' || response.data.bizCode === '9999')) {
          response.data.respDesc = '服务异常'
        }
        return response
      },
      err => {
        console.log(err, 'response');
        return Promise.reject(err)
      }
    )
  }
}

for (const method of ['get', 'delete', 'head', 'options']) {
  Initiator.prototype[method] = function (url, config) {
    return this.axios[method](
      url,
      Object.assign({ baseURL: baseUrl }, config)
    )
  }
}

for (const method of ['post', 'put', 'patch']) {
  Initiator.prototype[method] = function (url, data, config) {
    return this.axios[method](
      url,
      data,
      Object.assign({ baseURL: baseUrl }, config)
    )
  }
}

export function createInitiator(config = {}) {
  return new Initiator(
    Object.assign(
      {
        timeout: 15000
      },
      config
    )
  )
}