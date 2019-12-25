import Vue from 'vue'
import axios from 'axios'

let options = {
    timeout: 5000,
    baseURL: '/api/'
}
const TOKEN_KEY = 'jwt-token'

let service = axios.create(options);

export default ({ store, redirect }) => {
    service.interceptors.request.use(
        config => {
            const token = window.localStorage.getItem(TOKEN_KEY);
            if (token) {
                // 判断是否存在token，如果存在的话，则每个http header都加上token
                // Bearer 是JWT的认证头部信息
                config.headers.common["Authorization"] = "Bearer " + token;
            }
            return config;
        },
        err => {
            return Promise.reject(err);
        }
    );
    service.interceptors.response.use(
        async response => {
            return response.data;
        },
        err => {
            return Promise.reject(err);
        }
    );

}
Vue.prototype.$http = service

export const http = service