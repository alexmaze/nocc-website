<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
console.log(new Date())

export default {
  name: 'app',
  components: {
  }
}
</script>

<style lang="less">
#app {
  width: 960px;
  background: rgba(0,0,0,0.1);
  margin: auto;
}
</style>
