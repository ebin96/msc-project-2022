import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    assayData : null,
    backupData: null,
    sortData: null,
    alertMsg: "No file has been chosen",
    insFlag: true,
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
    },
    changeInsFlag (state) {
      state.insFlag = false
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
    },
    getInsFlag (state) {
      return state.insFlag
    }
  },
  actions: {
  },
  modules: {
  }
})
