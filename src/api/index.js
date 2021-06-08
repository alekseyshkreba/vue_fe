'use strict'

import axios from 'axios'

axios.defaults.baseURL = process.env.VUE_APP_ROOT_API

export default class API {

    static register(data) {
        return axios.post('/auth/register', data)
    }

    static login(data) {
        return axios.post('/auth/login', data)
    }

    static getUserProfile(id) {
        return axios.get(`/profile/${id}`)
    }

    static deleteUser(id) {
        return axios.delete(`/user/${id}`)
    }

    static getPosts(perPage) {
        return axios.post(`/posts`, {
            perPage: perPage
        })
    }

    static likePost(data) {
        return axios.post('/post/like', data)
    }

    static createPost(data) {
        return axios.post('/post/create', data)
    }
}