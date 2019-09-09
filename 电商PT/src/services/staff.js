import request from '@/utils/request';
// import axios from 'axios'
export async function queryStaff(param) {
    return request('/api/user/pageQuery', {
        method: 'get',
        params: param,
        headers: { 'Content-Type': 'application/x-www-form-urlcoded;charset=UTF-8' }
    })
}
export async function changeStates(param) {
    return request('/api/user/changeEnabled', {
        method: 'get',
        params: param,
        headers: { 'Content-Type': 'application/x-www-form-urlcoded;charset=UTF-8' }
    })
}

