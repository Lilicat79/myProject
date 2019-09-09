import request from '@/utils/request';
// import axios from 'axios'
export async function queryMarket(param) {
    return request('/api/user/pageQuery', {
        method: 'get',
        params: param,
        headers: { 'Content-Type': 'application/x-www-form-urlcoded;charset=UTF-8' }
    })
}
export async function changeMarket(param) {
    return request('/api//user/saveOrUpdate', {
        method: 'post',
        params: param,
        headers: { 'Content-Type': 'application/x-www-form-urlcoded;charset=UTF-8' }
    })
}

