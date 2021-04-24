import { gameConfig } from '~/lib/game-config'

export const jumpParameters = {
  y: `-${0.3 * gameConfig.height}`,
  duration: 300,
  ease: 'Power2',
  yoyo: true
}
