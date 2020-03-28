<template>
    <div class="posts-container row">
        <div class="post-container col-4"  v-for="post in posts" :key="post.title">
            <post :title="post.title" :text="post.text" :tags="post.tags" :create-date="post.createDate" />
        </div>
    </div>
</template>

<script>
import Post from './Post'
import postService from '../services/postService'
export default {
  name: 'Posts',
  components: { Post },
  data () {
    return {
      posts: []
    }
  },
  async created () {
    this.posts = await postService.getPosts()
  }

}
</script>

<style scoped lang="scss">
    .posts-container {
        border: solid 1px black;
    }

</style>
