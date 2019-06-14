import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    itemList: localStorage.getItem('itemList') === null ? [] : JSON.parse(localStorage.getItem('itemList'))
  },
  mutations: {
    updateItemList (state, itemList) {
      state.itemList = itemList
      localStorage.setItem('itemList', JSON.stringify(itemList))
    }
  },
  actions: {
    asyncUpdateItemList ({ commit }, itemList) {
      commit('updateItemList', itemList)
    }
  }
})
