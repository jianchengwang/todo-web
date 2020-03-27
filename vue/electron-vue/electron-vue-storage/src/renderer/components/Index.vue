<template>
  <div id="wrapper">
    <img id="logo" src="~@/assets/avatar.jpg" alt="avatar">
    <main>
      <div class="left-side">
        <left-menu></left-menu>
      </div>

      <div class="right-side">
        <router-view></router-view>
      </div>
    </main>
    <div class="bottom">
      Electron-Vue-Storage design by jiancheng.wang <button @click="open('http://blog.jianchengwang.info')">Open Blog</button>
    </div>
  </div>
</template>

<script>
  import LeftMenu from './layout/LeftMenu'

  export default {
    name: 'landing-page',
    components: { LeftMenu },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      }
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body { font-family: 'Source Sans Pro', sans-serif; }

  #wrapper {
    background:
      radial-gradient(
        ellipse at top left,
        rgba(255, 255, 255, 1) 40%,
        rgba(229, 229, 229, .9) 100%
      );
    height: 100vh;
    padding: 60px 80px;
    width: 100vw;
  }

  #logo {
    height: auto;
    margin-bottom: 20px;
    width: auto;
  }

  main {
    display: flex;
    justify-content: space-between;
  }

  main > div { flex-basis: 50%; }

  .left-side {
    display: flex;
    flex-direction: column;
  }

  .welcome {
    color: #555;
    font-size: 23px;
    margin-bottom: 10px;
  }

  .bottom {
    position: absolute;
    bottom: 5px;
    color: #2c3e50;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 6px;
  }

  .div.alt {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .div p {
    color: black;
    margin-bottom: 10px;
  }

  button {
    font-size: .4em;
    cursor: pointer;
    outline: none;
    padding: 0.75em 2em;
    border-radius: 2em;
    display: inline-block;
    color: #fff;
    background-color: #4fc08d;
    transition: all 0.15s ease;
    box-sizing: border-box;
    border: 1px solid #4fc08d;
  }

  button.alt {
    color: #42b983;
    background-color: transparent;
  }
</style>
