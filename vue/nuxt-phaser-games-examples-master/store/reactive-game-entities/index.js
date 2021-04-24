const actions = {
  setPosition({ commit, state }, newPosition) {
    commit('setPosition', {
      ...state.position,
      ...newPosition
    })
  }
}

const mutations = {
  setPosition(state, newPosition) {
    state.position = newPosition
  }
}

const state = () => ({
  position: { x: 0, y: 0 }
})

export default {
  actions,
  mutations,
  state
}
