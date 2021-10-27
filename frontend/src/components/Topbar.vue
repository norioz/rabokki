<template>
  <div class="Topbar">
    <div>Thing One</div>
    <div>Thing Two</div>
  </div>
</template>

<script>
export default {
  name: 'Topbar',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Topbar {
  height: 54px;
  padding: 4px;
  background-color: #f87d6d;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
</style>
