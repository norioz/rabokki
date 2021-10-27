<template>
  <div class="PlayerInput">
    <input type="text" v-model="inputText"/>
    <button v-on:click="this.shoutOut">Submit</button>
  </div>
</template>

<script>
export default {
  name: 'PlayerInput',
  props: {
  },
  data: () => {
    return {
      inputText: ""
    }
  },
  methods: {
    shoutOut: function () {
      // TODO This is where the logic goes after you submit
      alert(this.inputText);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.PlayerInput {
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 60px;
}
</style>
