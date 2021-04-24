<template>
  <section>
    <div class="overlay">
      <button type="button" @click="selectShape('circle')">
        Select circle
      </button>

      <button type="button" @click="selectShape('square')">
        Select square
      </button>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex'

import { createGame } from '~/lib/subscribe-action'

export default {
  mounted() {
    this.game = createGame(this.$el, this.$store)
  },

  beforeDestroy() {
    this.game.destroy()
  },

  methods: {
    ...mapActions('subscribe-action', ['selectShape'])
  }
}
</script>
