import axios from 'axios';
import { Notify } from 'quasar';
const baseUrl = {
  endpoint: process.env.endpoint
}

const backendAdapter = axios.create({
  baseURL: baseUrl.endpoint,
  timeout: 0
})

backendAdapter.interceptors.response.use(response => {
  return response.data
}, error => {

  Notify.create({
    message: error.response.data || 'Có lỗi xảy ra',
    position: 'top-right',
    color: 'negative',
    timeout: 1500
  })
  return Promise.reject(error)
})

export default {
  backendAdapter
}
