import Phaser from 'phaser'

import { gameConfig } from '~/lib/game-config'
import { parseColor } from '~/lib/parse-color'

const radius = 0.1 * Math.min(gameConfig.width / 2, gameConfig.height / 2)
const bounds = new Phaser.Geom.Rectangle(
  0,
  0,
  gameConfig.width - 2 * radius,
  gameConfig.height - 2 * radius
)

const actions = {
  addCircle({ commit }) {
    const { x, y } = Phaser.Geom.Rectangle.Random(bounds)
    const color = parseColor('#aa00ff')

    commit('addCircle', { x, y, radius, color })
  },

  moveCircles({ commit }) {
    commit('moveCircles')
  }
}

const mutations = {
  addCircle(state, circleData) {
    state.circles = [...state.circles, circleData]
  },

  moveCircles(state) {
    state.circles = state.circles.map((circle) => {
      const { x, y } = Phaser.Geom.Rectangle.Random(bounds)
      return { ...circle, x, y }
    })
  }
}

const state = () => ({
  circles: []
})

export default {
  actions,
  mutations,
  state
}
