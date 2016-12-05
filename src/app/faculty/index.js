import './faculty.less'
import UserCard from '../../components/user-card'

export default {
  name: 'faculty',
  template: require('./faculty.html'),
  components: { UserCard },
  data () {
    return {
      userList: []
    }
  },
  created () {
    this.loadData()
  },
  methods: {
    loadData () {
      fetch(`/api/faculty`)
      .then(response => {
        if (response.status >= 400) {
          throw new Error('Bad response from server')
        }
        return response.json()
      })
      .then(data => {
        this.userList = []
        data.forEach(item => {
          item.description = delHtmlTag(item.description)
          item.description_en = delHtmlTag(item.description_en)
          this.userList.push(item)
        })
      })
    }
  },
  mounted () {
    console.log('faculty mounted')
    this.loadData()
  }
}

function delHtmlTag (str) {
  if (!str || !str.replace) return
  return str.replace(/<[^>]+>/g, '')
}
