<template>
  <section>
    <div class="overlay">
      <label>
        X: {{ position.x }}<br />
        <input
          type="range"
          value="0"
          :max="xMax"
          @input="setPosition({ x: $event.target.value })"
        />
      </label>

      <label>
        Y: {{ position.y }}<br />
        <input
          type="range"
          value="0"
          :max="yMax"
          @input="setPosition({ y: $event.target.value })"
        />
      </label>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex'

import { gameConfig } from '~/lib/game-config'
import { createGame } from '~/lib/reactive-game-entities'
import { size as squareSize } from '~/lib/reactive-game-entities/square-parameters'

export default {
  computed: {
    ...mapState('reactive-game-entities', ['position']),

    xMax() {
      return gameConfig.width - squareSize
    },

    yMax() {
      return gameConfig.height - squareSize
    }
  },

  mounted() {
    this.game = createGame(this.$el, this.$store)
  },

  beforeDestroy() {
    this.game.destroy()
  },

  methods: {
    ...mapActions('reactive-game-entities', ['setPosition'])
  }
}
</script>

<style scoped>
.overlay label {
  width: 5em;
}
</style>
