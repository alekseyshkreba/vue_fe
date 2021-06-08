import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'
import API from "../api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user : {}
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
  },
  mutations: {
    auth_request(state){
      state.status = 'loading'
    },
    auth_success(state, data){
      state.status = 'success'
      state.token = data.token
      state.user = data.user
    },
    auth_error(state){
      state.status = 'error'
    },
    logout(state){
      state.status = ''
      state.token = ''
    },
  },
  actions: {
    login({commit}, data) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        API.login(data).then(resp => {
          const data = resp.data
          localStorage.setItem('token', data.token)
          axios.defaults.headers.common['Authorization'] = data.token
          commit('auth_success', data)
          resolve(resp)
        }).catch(err => {
          commit('auth_error')
          localStorage.removeItem('token')
          reject(err)
        })
      })
    },
    logout({commit}) {
      return new Promise((resolve) => {
        commit('logout')
        localStorage.removeItem('token')
        delete axios.defaults.headers.common['Authorization']
        resolve()
      })
    },
    register({commit}, data){
      return new Promise((resolve, reject) => {
        commit('auth_request')
        API.register(data).then(resp => {
          const data = resp.data
          localStorage.setItem('token', data.token)
          axios.defaults.headers.common['Authorization'] = data.token
          commit('auth_success', data)
          resolve(resp)
        })
            .catch(err => {
              commit('auth_error', err)
              localStorage.removeItem('token')
              reject(err)
            })
      })
    },
  },
  modules: {},
});
