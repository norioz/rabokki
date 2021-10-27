<template>
  <div class="PageFooter">
    <div>Thing One</div>
    <div>Thing Two</div>
  </div>
</template>

<script>
export default {
  name: 'PageFooter',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.PageFooter {
  height: 100px;
  padding: 4px;
  background-color: #0abfd6;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
</style>
