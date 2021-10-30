<template>
  <div class="GameArea">
    <div style="flex:1;">{{PlayHistory}}</div>
    <PlayerInput @theyEntered="this.onEnter" />
  </div>
</template>

<script>
import PlayerInput from "./PlayerInput";
export default {
  name: 'GameArea',
  components: {
    PlayerInput
  },
  data: () => {
    return {
      PlayHistory: "foo"
    }
  },
  methods: {
    onEnter: function (theirEntry){
      this.PlayHistory = this.PlayHistory.concat(' ', theirEntry);
    }
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
