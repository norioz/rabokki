<template>
  <div class="GameArea">
    <div style="flex:1;">Thing One</div>
    <PlayerInput />
  </div>
</template>

<script>
import PlayerInput from "./PlayerInput";
export default {
  name: 'GameArea',
  components: {
    PlayerInput
  },
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.GameArea {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
}
</style>
