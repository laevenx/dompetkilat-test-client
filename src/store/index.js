import Vue from 'vue'
import Vuex from 'vuex'
import server from '../api'
import router from '../router'

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
    finance: [],
    registerData: {},
    createData: {}
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
    SET_TOKEN (state,payload){
      state.token = payload
    },
    SET_REGISTERDATA (state,payload){
      state.registerData = payload
    },
    SET_CREATEDATA(state,payload){
      state.createData = payload
    }
  },
  actions: {
    login ({ commit }, payload) {
      console.log(payload)
      return server.post('/login', {
        email: payload.email,
        password: payload.password

      })
        .then(({data}) => {
          // console.log(data)
          commit('SET_TOKEN', data)
          localStorage.setItem('token', data)

        })
        .catch(err => {
          console.log(err.response)
        })
    },
    register () {
      let payload = this.state.registerData
      return server.post('/register', {
        username: payload.username,
        email: payload.email,
        password: payload.password
      })
      .then(() => {
        // console.log(data)
        router.push('/login')
      })
      .catch(err => {
        console.log(err.response)
      })
    },
    fetchReksadana ({ commit }) {
      return server.get('/reksadana')
        .then(({ data }) => {
          console.log('reksadana', data)
          commit('SET_REKSADANA', data)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    fetchSbn ({ commit }) {
      return server.get('/sbn')
        .then(({ data }) => {
          console.log('sbn', data)
          commit('SET_SBN', data)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    fetchFinance ({ commit }) {
      return server.get('/finance')
        .then(({ data }) => {
          console.log('finance', data)
          commit('SET_FINANCE', data)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    fetchConventionalOsf ({ commit }) {
      server.get(`/conventionalosf`)
        .then(({ data }) => {
          console.log('conventional_osf',data)
          commit('SET_CONVENTIONALOSF', data)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    fetchConventionalInvoice ({ commit }) {
      server.get('/conventionalinvoice')
        .then(({ data }) => {
          console.log('Conventional_invoice',data)
          commit('SET_CONVENTIONALINVOICE', data)
         
        })
        .catch(err => {
          console.log(err.response.data.error)
        })
    },
    fetchProductiveInvoice ({ commit }) {
        server.get('/productiveinvoice')
          .then(({ data }) => {
            console.log('productive_invoice',data)
            commit('SET_PRODUCTIVEINVOICE', data)
           
          })
          .catch(err => {
            console.log(err.response.data.error)
          })
      },
    create(){
      let payload = this.state.createData
      let data = {}
      if (payload.option == "Reksadana"){
        data = {
          name : payload.name,
          amount : payload.amount,
          return : payload.returnReksa
        }
      }else if (payload.option == "Sbn"){
        data = {
          name: payload.name,
          amount: payload.amount,
          tenor: payload.tenor,
          rate: payload.rate,
          type: payload.type
        }
      }else if (payload.option == "ProductiveInvoice"){
        data = {
          name : payload.name,
          amount : payload.amount,
          grade: payload.grade,
          rate : payload.rate
        }

      }else if (payload.option == "ConventionalOsf" || payload.option == "Finance"){
        data = {
          name : payload.name,
          amount : payload.amount,
          tenor : payload.tenor,
          grade : payload.grade,
          rate : payload.rate
        }
      }
      // payload.option = payload.option.toLowerCase()
      server.post(`/${payload.option.toLowerCase()}`,data,{
        headers : {
          "Authorization": localStorage.token
        }
      })
        .then(() => {
          router.push('/')
        })
        .catch(err => {
          console.log(err.response)
        })

    }
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
    createData: state => state.createData,
    registerData: state => state.registerData
  }
})
