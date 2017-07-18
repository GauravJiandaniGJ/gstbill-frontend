import axios from 'axios'

let axiosInstance = axios.create({
  baseURL: 'http://api.gaurav-gst-billing.com/api/'
})

export default axiosInstance
