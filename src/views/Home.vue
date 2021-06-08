<template>
  <div class="home">
    <div v-for="(post, index) in posts" :key="index" style="border: 1px solid black" class="w-25 m-auto mb-3">
      <h2>{{ post.title }}</h2>
      <b-img src="http://localhost:8000/storage/images/download.png" fluid :alt="post.title"></b-img>
      <p>{{ post.description }}</p>
      <btn-like :data="post" />
      <div class="comments">
      </div>
    </div>
  </div>
</template>

<script>


import API from "../api";
import BtnLike from '../components/Btn/Like.vue'

export default {
  name: "Home",
  components: {
    BtnLike
  },
  data () {
    return {
      posts: {},
      countPerPage: 10,
      lastPage: ''
    }
  },
  mounted() {
    this.getAllPosts()
  },
  methods: {
    getAllPosts() {
      API.getPosts(this.countPerPage).then((resp) => {
        this.lastPage = resp.lastPage
        this.posts = resp.data.data
      })
    }
  }
};
</script>
