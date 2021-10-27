<template>
  <div id="app">
    <Topbar />
    <GameArea />
    <PageFooter />
  </div>
</template>

<script>
import Topbar from './components/Topbar.vue'
import PageFooter from './components/PageFooter.vue'
import GameArea from './components/GameArea.vue'

export default {
  name: 'App',
  components: {
    Topbar,
    PageFooter,
    GameArea
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
</style>
