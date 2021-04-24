import Phaser from 'phaser'

import { circleParameters } from './circle-parameters'
import { jumpParameters } from './jump-parameters'
import { squareParameters } from './square-parameters'

import { gameConfig } from '~/lib/game-config'
import { parseColor } from '~/lib/parse-color'

const defaultColor = parseColor('#00ffc0')
const selectedColor = parseColor('#c000ff')

export const createGame = (parent, store) => {
  const scene = {
    create() {
      const shapes = {
        circle: this.add.circle(...circleParameters, defaultColor),
        square: this.add.rectangle(...squareParameters, defaultColor)
      }

      const unwatch = store.watch(
        (state) => state['subscribe-action'].shape,
        (selectedShape) => {
          Object.entries(shapes).forEach(([shapeName, shape]) => {
            const isSelected = shapeName === selectedShape
            const color = isSelected ? selectedColor : defaultColor
            shape.setFillStyle(color)
          })
        }
      )

      const unsubscribe = store.subscribeAction({
        after: ({ type }, state) => {
          const selectedShape = state['subscribe-action'].shape
          this.tweens.add({
            ...jumpParameters,
            targets: shapes[selectedShape]
          })
        }
      })

      this.sys.events.on('destroy', () => {
        unwatch()
        unsubscribe()
      })
    }
  }

  return new Phaser.Game({
    ...gameConfig,
    parent,
    scene
  })
}
