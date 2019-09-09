import request from '@/utils/request';
// import axios from 'axios'
export async function queryLogs(param) {
    return request('/api/logs/pageQuery', {
        method: 'get',
        params: param,
        headers: { 'Content-Type': 'application/x-www-form-urlcoded;charset=UTF-8' }
    })
}
