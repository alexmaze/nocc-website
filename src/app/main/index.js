import './main.less'
import NoccHeader from '../../components/header'
import NoccFooter from '../../components/footer'

export default {
  name: 'main',
  template: require('./main.html'),
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
