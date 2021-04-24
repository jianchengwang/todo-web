const actions = {
  selectShape({ commit }, shape) {
    commit('setShape', shape)
  }
}

const mutations = {
  setShape(state, shape) {
    state.shape = shape
  }
}

const state = () => ({
  shape: null
})

export default {
  actions,
  mutations,
  state
}
