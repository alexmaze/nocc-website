<template>
  <div class="index">
    <nocc-header></nocc-header>
    <router-view></router-view>
    <nocc-footer></nocc-footer>
  </div>
</template>

<script>
import NoccHeader from './Header'
import NoccFooter from './Footer'
export default {
  name: 'index',
  components: {
    NoccHeader,
    NoccFooter
  },
  data () {
    return {
      msg: 'Hello NOCC!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .index {
  }
</style>
