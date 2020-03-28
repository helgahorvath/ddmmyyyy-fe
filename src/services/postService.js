import * as axios from 'axios'

const root = 'http://localhost:8080/api'
class PostService {
    posts = null;

    async getPosts () {
      const result = await axios.get(`${root}/posts`)
      this.posts = result.data
      return result.data
    }

    postNewPost (post) {
      return axios.post(`${root}/newpost`, post)
    }
}

export default new PostService()
