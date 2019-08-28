import axios from 'axios';
import config from './config'
import { string } from 'prop-types';
import qs from 'qs'

axios.defaults.baseURL = config.baseURL;
axios.interceptors.response.use((response) => {
    // console.log(response, '+++++++');
    //封装返回的数据
    let res = { ...response, data: response.data.data, status: response.data.status, statusText: response.data.message };
    return res;
    // return response;
}, (error) => {
    return Promise.reject(error);
})

//拦截
axios.interceptors.request.use((config) => {
    console.log(config, '+++++12');
    if (config.method == 'post') {
        // console.log(1111);
        config.data = qs.stringify(config.data)
    }
    return config;

}, (error) => {
    return Promise.reject(error);
})
export default axios;