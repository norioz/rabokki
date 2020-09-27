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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
