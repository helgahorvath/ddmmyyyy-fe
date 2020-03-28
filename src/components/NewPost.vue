<template>
    <v-card class="container">
        <v-card-title>Add new post</v-card-title>
        <v-card-text class="mb-8">
            <v-text-field v-model="title" />
            <v-textarea v-model="text" />
            <v-text-field v-model="tag"></v-text-field>
        </v-card-text>
        <v-card-actions>
            <v-btn>Cancel</v-btn>
            <v-btn @click="addNewPost">Save</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import postService from '../services/postService'
export default {
  name: 'NewPost',
  data () {
    return {
      title: '',
      text: '',
      tag: ''
    }
  },
  methods: {
    addNewPost () {
      postService.postNewPost({ title: this.title, text: this.text, tags: [this.tag, 'ujtag'] })
    }
  }
}
</script>

<style scoped lang="scss">
    .container {
        width: 100%;
        height: 100%;
    }

</style>
