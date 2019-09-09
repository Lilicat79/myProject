import request from '@/utils/request';
// import axios from 'axios'
export async function queryShop(param) {
    return request('/api/store/pageQuery', {
        method: 'get',
        params: param,
        headers: { 'Content-Type': 'application/x-www-form-urlcoded;charset=UTF-8' }
    })
}


