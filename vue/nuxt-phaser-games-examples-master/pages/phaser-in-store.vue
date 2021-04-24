<template>
  <section>
    <div class="overlay">
      <label>
        Color:
        <input type="color" value="#0000ff" @input="setColor($event.target)" />
      </label>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  mounted() {
    this.initializeGame(this.$el)
  },

  beforeDestroy() {
    this.destroyGame()
  },

  methods: {
    ...mapActions('phaser-in-store', [
      'destroyGame',
      'initializeGame',
      'setColor'
    ])
  }
}
</script>
