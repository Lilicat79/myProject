
import request from '@/utils/request';
// import axios from 'axios'
export async function queryBusiness(param) {
    return request('/api/busines/pageQuery', {
        method: 'get',
        params: param,
        headers: { 'Content-Type': 'application/x-www-form-urlcoded;charset=UTF-8' }
    })
}
