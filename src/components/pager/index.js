import './pager.less'
export default {
  name: 'pager',
  template: require('./pager.html'),
  props: ['page', 'perpage', 'total'],
  methods: {
    goPre () {
      if (this.hasPre) {
        this.$emit('pre')
      }
    },
    goNext () {
      if (this.hasNext) {
        this.$emit('next')
      }
    }
  },
  computed: {
    hasNext () {
      console.log(this.page, this.perpage, this.total)
      return this.page * this.perpage < this.total
    },
    hasPre () {
      return this.page > 1
    }
  }
}
