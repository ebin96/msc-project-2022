import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    assayData : null,
    backupData: null,
    sortData: null,
    alertMsg: "No file has been chosen"
  },
  mutations: {
    addAssayData (state, value) {
      state.assayData = value
    },
    addBackupData (state, value) {
      state.backupData = value
    },
    addSortableData (state, value) {
      state.sortData = value
    }
  },
  getters:{
    getAssayData (state) {
      return state.assayData
    },
    getBackupData (state) {
      return state.backupData
    },
    getSortableData (state) {
      return state.sortData
    }
  },
  actions: {
  },
  modules: {
  }
})
