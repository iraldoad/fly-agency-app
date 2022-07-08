import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchParams: {},
    flights: [],
  },
  mutations: {
    searchParams (state, params) {
      this.state.searchParams = params
    },
    flights (state, flights) {
      this.state.flights = flights
    },
  },
  actions: {
    setSearchParams({ commit }, params) {
      commit('searchParams', params)
    },
    setFlights ({ commit }, flights) {
      commit('flights', flights)
    },
  },
})
