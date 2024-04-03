import axios from 'axios'
import { useBasicStore } from '@/store/basic'
import {ElMessage} from 'element-plus'

import {getToken} from '@/utils/tool.js'
const service = axios.create()



service.interceptors.request.use((req) => {
  // const { token, axiosPromiseArr } = useBasicStore()
  const token = localStorage.getItem('token')
  const axiosPromiseArr = []
  req.cancelToken = new axios.CancelToken((cancel) => {
    axiosPromiseArr.push({
      url: req.url,
      cancel
    })
  })

  // @ts-ignore
  req.headers.Authorization = `Bearer ${token}`
 
  if ('get'.includes(req.method?.toLowerCase() as string)) req.params = req.data

  return req
}, (err) => {
  console.log(err)

  // loading.close()
  Promise.reject(err)
})

service.interceptors.response.use(
  (res) => {

    const { code } = res.data
    const { status, headers } = res
    const successCode = '0,200,20000'
    const noAuthCode = '401,403'
    // loading.close()
    if(res.data.code!=="0"){
    }
    if (successCode.includes(code) || successCode.includes(status)) {

      if (res.headers['content-disposition']) {
        return res
      } else {
        return res.data
      }
    } else {
      if (noAuthCode.includes(code) && !location.href.includes('/login')) {
      
      }
      return Promise.reject(res.data)
    }

  },

  (err) => {
    if(err.response.data.code==100){
      ElMessage.error({
        message: err.response.data.msg,
        duration: 2 * 1000
      })
    }
    return Promise.reject(err)
  }
)


export default function axiosReq(config) {
  return service({
    baseURL: import.meta.env.VITE_APP_BASE_URL,
    // timeout: 3*60*1000,
    ...config,

  })
}
