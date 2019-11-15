/*
ajax函数请求模块
*/
import axios from 'axios'

export default function ajax(url, data = {}, type = 'GET') {
  return new Promise(function(resolve, reject) {
    let promise
    if (type === 'GET') {
      // 准备url query参数数据
      let dataStr = ''
      Object.keys(data).forEach((key) => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      promise = axios.get(url)
    } else {
      promise = axios.post(url, data)
    }
    promise
      .then(function(response) {
        resolve(response.data)
      })
      .catch(function(error) {
        reject(error)
      })
  })
}
