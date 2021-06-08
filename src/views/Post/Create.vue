<template>
  <div class="m-auto w-25">
    <h1>Create Post</h1>
    <b-form @submit.prevent="handleCreatePost">
      <b-form-file
          v-model="post.image"
          placeholder="Choose a image or drop it here..."
          drop-placeholder="Drop file here..."
      />
      <b-form-input
          v-model="post.title"
          placeholder="Title"
          type="text"/>
      <b-form-textarea
          class="mt-4"
          v-model="post.description"
          id="textarea"
          placeholder="Enter something..."
          rows="3"
          max-rows="6"
      />
      <b-button type="submit" class="mt-2 btn-success">Create post</b-button>
    </b-form>
  </div>
</template>

<script>
import API from "../../api";

export default {
  name: "PostCreate",
  data () {
    return {
      post: {
        title: '',
        description: '',
        id: 3,
        image: 'asdasd'
      }
    }
  },
  methods: {
    handleCreatePost () {
      try {
        API.createPost(this.post)
        this.$toast.success('New post created')
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>

</style>