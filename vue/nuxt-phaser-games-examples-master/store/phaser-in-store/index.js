import Phaser from 'phaser'

import { circleParameters } from './circle-parameters'
import { gameConfig } from '~/lib/game-config'
import { parseColor } from '~/lib/parse-color'

let circle
let game

const actions = {
  initializeGame(_, parent) {
    const scene = {
      create() {
        circle = this.add.circle(...circleParameters)
      }
    }

    game = new Phaser.Game({
      ...gameConfig,
      parent,
      scene
    })
  },

  setColor(_, { value }) {
    circle.setFillStyle(parseColor(value))
  },

  destroyGame() {
    game.destroy()
  }
}

export default {
  actions
}
