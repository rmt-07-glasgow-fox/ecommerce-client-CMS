<script>
import axios from '../api/axios'

export default {
  name: 'Delete',
  methods: {
    delete () {
      const id = this.$route.params.id
      axios({
        method: 'DELETE',
        url: 'http://localhost:3000/products/' + id,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          console.log('succcess!!')
        })
        .catch(err => console.log(err))
    }
  },
  created () {
    this.delete()
  }
}
</script>

<style>
</style>
