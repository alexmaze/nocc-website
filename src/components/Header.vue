<template>
  <div class="header">
    <img class="logo" src="../assets/logo.png" alt="">
    <div class="right">
      <div class="actions"></div>
      <ul class="menu">
        <li>Mission</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nocc-header',
  data () {
    return {
      msg: 'Hello NOCC!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .header {
    height: 102px;
    padding: 66px 20px 20px 20px;
    .logo {
      height: 102px;
    }
    .right {
      float: right;
      height: 100%;
      overflow: hidden;
    }
  }
</style>
