<template>
  <section>
    <div class="overlay">
      <button type="button" @click="addCircle">
        Add circle #{{ circles.length + 1 }}
      </button>

      <button type="button" @click="moveCircles">
        Move {{ circles.length }} circles
      </button>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex'

import { createGame } from '~/lib/store-watchers'

export default {
  computed: {
    ...mapState('store-watchers', ['circles'])
  },

  mounted() {
    this.game = createGame(this.$el, this.$store)
  },

  beforeDestroy() {
    this.game.destroy()
  },

  methods: {
    ...mapActions('store-watchers', ['addCircle', 'moveCircles'])
  }
}
</script>
