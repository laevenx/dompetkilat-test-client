import Vue from 'vue'
import Vuex from 'vuex'
import server from '../api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accName: '',
    isLoginRegister: false,
    loggedIn: false,
    activeTab: 0,
    reksadana: [],
    conventionalOsf: [],
    conventionalInvoice: [],
    productiveInvoice: [],
    sbn: [],
    finance: []
  },
  mutations: {
    SET_LOGIN (state, payload) {
      state.loggedIn = payload
    },
    SET_ACTIVETAB (state, payload) {
      state.activeTab = payload
    },
    SET_PRODUCTS (state, payload) {
      state.products = payload
    },
    SET_BANNERS (state, payload) {
      state.banners = payload
    },
    SET_SELECTITEM (state, payload) {
      state.selectItem = payload
    },
    ADD_NUMBERCART (state, payload) {
      state.numbercart++
    },
    RESET_NUMBERCART (state, payload) {
      state.numbercart = 0
    },
    MINUS_NUMBERCART (state, payload) {
      state.numbercart--
    },
    SET_NUMBERCART (state, payload) {
      state.numbercart = payload
    },
    SET_CHECKOUT (state, payload) {
      state.checkout = payload
    }
  },
  actions: {
    login ({ commit, state }, payload) {
      console.log(payload)
      return server.post('/login', {
        email: payload.email,
        password: payload.password

      })
    },
    register ({ commit, state }, payload) {
      console.log(payload)
      return server.post('/register', {
        first_name: payload.first_name,
        last_name: payload.last_name,
        email: payload.email,
        password: payload.password,
        roles: 'costumer'
      })
    },
    fetchProducts ({ commit }) {
      return server.get('/products/list', {
        headers: {
          token: localStorage.token
        }
      })
        .then(({ data }) => {
          console.log('products', data.data)
          commit('SET_PRODUCTS', data.data)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    fetchCart ({ commit, state }) {
      return server.get('/cart/list', {
        headers: {
          token: localStorage.token
        }
      })
        .then(({ data }) => {
          console.log('cart', data.data)
          commit('SET_CARTS', data.data)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    fetchBanners ({ commit, state }) {
      return server.get('/banner/list', {
        headers: {
          token: localStorage.token
        }
      })
        .then(({ data }) => {
          console.log('banners', data.data)
          const payload = data.data
          for (let i = 0; i < payload.length; i++) {
            payload[i].image = payload[i].image_url
          }
          commit('SET_BANNERS', payload)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    loadItem ({ commit, state }, id) {
      server.get(`/products/${id}`, {
        headers: {
          token: localStorage.token
        }
      })
        .then(({ data }) => {
          commit('SET_SELECTITEM', data)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    loadCheckout ({ commit, state }) {
      server.get('/cart/checkout', {
        headers: {
          token: localStorage.token
        }
      })
        .then(({ data }) => {
          const payload = data.data
          commit('SET_NUMBERCART', payload.length)
          commit('SET_CHECKOUT', payload)
        })
        .catch(err => {
          console.log(err.response.data.error)
        })
    },
    calculateNumberCart ({ commit, state }) {
      console.log('carts', state.carts)
      commit('SET_NUMBERCART', state.carts.length)
    }
  },
  modules: {
  },
  getters: {
    loggedIn: state => state.loggedIn,
    isLoginRegister: state => state.isLoginRegister,
    activeTab: state => state.activeTab,
    products: state => state.products,
    carts: state => state.carts,
    banners: state => state.banners,
    selectItem: state => state.selectItem,
    numbercart: state => state.numbercart,
    accName: state => state.accName,
    checkout: state => state.checkout
  }
})
