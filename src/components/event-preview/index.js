import './event-preview.less'
export default {
  name: 'event-preview',
  props: ['data'],
  template: require('./event-preview.html'),
  data () {
    return {}
  },
  methods: {
    detail () {
      console.log(this.data.id)
      this.$router.push({
        name: 'event',
        params: {
          id: this.data._id
        }
      })
    }
  }
}
