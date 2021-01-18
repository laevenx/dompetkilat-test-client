import Vue from 'vue'
import Vuex from 'vuex'
import server from '../api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
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
    SET_SBN (state,payload){
        state.sbn = payload
    },
    SET_REKSADANA (state,payload){
        state.reksadana = payload
    },
    SET_CONVENTIONALOSF (state,payload){
        state.conventionalOsf = payload
    },
    SET_CONVENTIONALINVOICE (state,payload){
        state.conventionalInvoice = payload
    },
    SET_PRODUCTIVEINVOICE (state,payload){
        state.productiveInvoice = payload
    },
    SET_FINANCE (state,payload){
        state.finance = payload
    },
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
    fetchReksadana ({ commit }) {
      return server.get('/reksadana', {
        headers: {
          "Authentication": localStorage.token
        }
      })
        .then(({ data }) => {
          console.log('reksadana', data.data)
          commit('SET_REKSADANA', data.data)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    fetchSbn ({ commit }) {
      return server.get('/sbn', {
        headers: {
            "Authentication": localStorage.token
        }
      })
        .then(({ data }) => {
          console.log('sbn', data.data)
          commit('SET_SBN', data.data)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    fetchFinance ({ commit }) {
      return server.get('/finance', {
        headers: {
          "Authentication": localStorage.token
        }
      })
        .then(({ data }) => {
          console.log('finance', data.data)
          commit('SET_FINANCE', data.data)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    fetchConventionalOsf ({ commit }) {
      server.get(`/conventionalosf`, {
        headers: {
          "Authentication": localStorage.token
        }
      })
        .then(({ data }) => {
          console.log('conventional_osf',data.data)
          commit('SET_CONVENTIONALOSF', data)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    fetchConventionalInvoice ({ commit }) {
      server.get('/conventionalinvoice', {
        headers: {
          "Authentication": localStorage.token
        }
      })
        .then(({ data }) => {
          console.log('Conventional_invoice',data.data)
          commit('SET_CONVENTIONALINVOICE', data.data)
         
        })
        .catch(err => {
          console.log(err.response.data.error)
        })
    },
    fetchProductiveInvoice ({ commit }) {
        server.get('/productiveinvoice', {
          headers: {
            "Authentication": localStorage.token
          }
        })
          .then(({ data }) => {
            console.log('productive_invoice',data.data)
            commit('SET_PRODUCTIVEINVOICE', data.data)
           
          })
          .catch(err => {
            console.log(err.response.data.error)
          })
      },
  },
  modules: {
  },
  getters: {
    loggedIn: state => state.loggedIn,
    isLoginRegister: state => state.isLoginRegister,
    token: state=> state.token,
    activeTab: state => state.activeTab,
    reksadana: state => state.reksadana,
    sbn: state => state.sbn,
    finance: state => state.finance,
    conventionalOsf: state => state.conventionalOsf,
    conventionalInvoice: state => state.conventionalInvoice,
    productiveInvoice: state => state.productiveInvoice,
    
  }
})
