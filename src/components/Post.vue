<template>
<v-card class="post-card px-6" >
    <v-card-title>
        {{ title }}
    </v-card-title>
    <v-card-subtitle> {{createDate}}</v-card-subtitle>
    <v-card-text>
        {{ text }}
    </v-card-text>
    <div :key="tag" v-for="tag in tags"> {{tag}} </div>
</v-card>
</template>

<script>
export default {
  name: 'Post',
  props: {
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    createDate: {
      type: String,
      required: true
    },
    tags: {
      type: Array,
      required: false,
      default () { return [] }
    }
  }

}
</script>

<style scoped>
    .post-card {
        min-height: 200px;
        min-width: 180px;
    }

</style>
