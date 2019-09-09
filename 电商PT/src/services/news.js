import request from '@/utils/request';
// import axios from 'axios'
export async function queryNews(param) {
    return request('/api/notice/pageQuery', {
        method: 'get',
        params: param,
        headers: { 'Content-Type': 'application/x-www-form-urlcoded;charset=UTF-8' }
    })
}
export async function queryNewsStatus(param) {
    return request('/api/notice/changeStatus', {
        method: 'get',
        params: param,
        headers: { 'Content-Type': 'application/x-www-form-urlcoded;charset=UTF-8' }
    })
}
export async function queryNewsDele(param) {
    return request('/api/notice/deleteById', {
        method: 'get',
        params: param,
        headers: { 'Content-Type': 'application/x-www-form-urlcoded;charset=UTF-8' }
    })
}

export async function queryNewsAdd(param) {
    return request('/api//notice/saveOrUpdate', {
        method: 'post',
        params: param,
        headers: { 'Content-Type': 'application/x-www-form-urlcoded;charset=UTF-8' }
    })
}
