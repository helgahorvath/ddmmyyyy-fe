import Vue from 'vue'
import VueRouter from 'vue-router'
import Posts from './src/components/Posts'
import NewPost from './src/components/NewPost'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Posts
  },
  {
    path: '/newpost',
    component: NewPost
  }
]

const router = new VueRouter({ routes })

export default router
