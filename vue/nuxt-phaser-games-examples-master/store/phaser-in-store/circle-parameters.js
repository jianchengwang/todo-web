import { gameConfig } from '~/lib/game-config'
import { parseColor } from '~/lib/parse-color'

const x = gameConfig.width / 2
const y = gameConfig.height / 2
const radius = 0.9 * Math.min(x, y)

export const circleParameters = [x, y, radius, parseColor('#0000ff')]
