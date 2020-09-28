<template>
  <div id="app">
    <WordGraph />
  </div>
</template>

<script>
import WordGraph from "./components/WordGraph.vue";
export default {
  name: "App",
  components: {
    WordGraph
  }
};
</script>

<style lang="scss">
  @import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500");
  @import url("https://fonts.googleapis.com/icon?family=Material+Icons");
  @import "material-components-vue/dist/button/styles";
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
