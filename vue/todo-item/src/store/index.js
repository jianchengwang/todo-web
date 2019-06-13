import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    itemList: []
  },
  mutations: {
    updateItemList (itemList) {
      console.info(itemList)
      this.state.itemList = itemList
      localStorage.setItem('itemList', itemList)
    }
  },
  actions: {
    asyncUpdateItemList (itemList) {
      this.commit('updateItemList', itemList)
    }
  }
})
