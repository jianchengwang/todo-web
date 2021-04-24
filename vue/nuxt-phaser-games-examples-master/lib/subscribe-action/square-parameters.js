import { gameConfig } from '~/lib/game-config'

const size = 0.6 * Math.min(gameConfig.width, gameConfig.height)
const x = 0.55 * gameConfig.width + size / 2
const y = gameConfig.height / 2

export const squareParameters = [x, y, size, size]
