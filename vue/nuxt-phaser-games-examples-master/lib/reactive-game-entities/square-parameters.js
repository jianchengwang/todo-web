import { gameConfig } from '~/lib/game-config'
import { parseColor } from '~/lib/parse-color'

const x = 0
const y = 0
export const size = 0.2 * Math.min(gameConfig.width, gameConfig.height)

export const squareParameters = [x, y, size, size, parseColor('#00ffff')]
