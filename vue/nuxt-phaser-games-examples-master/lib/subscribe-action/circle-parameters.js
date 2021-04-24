import { gameConfig } from '~/lib/game-config'

const radius = 0.3 * Math.min(gameConfig.width, gameConfig.height)
const x = 0.45 * gameConfig.width - radius
const y = gameConfig.height / 2

export const circleParameters = [x, y, radius]
