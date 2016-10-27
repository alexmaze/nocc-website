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
  margin: auto;
}
</style>
