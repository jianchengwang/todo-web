import Phaser from 'phaser'

import { squareParameters } from './square-parameters'

import { gameConfig } from '~/lib/game-config'

export const createGame = (parent, store) => {
  const scene = {
    create() {
      const square = this.add.rectangle(...squareParameters)
      square.setOrigin(0, 0)

      const reactiveProperties = ['x', 'y']
      reactiveProperties.forEach((name) => {
        Object.defineProperty(square, name, {
          get() {
            return store.state['reactive-game-entities'].position[name]
          }
        })
      })
    }
  }

  return new Phaser.Game({
    ...gameConfig,
    parent,
    scene
  })
}
