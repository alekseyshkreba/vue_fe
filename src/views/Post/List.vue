<template>
  <div class="m-auto w-50">
    <b-card
        v-for="item in posts" :key="item.title"
        class="w-25 mb-5"
        :title="item.title">
      <b-card-text>
        {{ item.description }}
      </b-card-text>
      <btn-like :data="item" />
    </b-card>
  </div>
</template>

<script>
import API from "../../api";
import BtnLike from "../../components/Btn/Like.vue"

export default {
  name: "PostsList",
  components: {
    BtnLike
  },
  data () {
    return {
      posts: ''
    }
  },
  mounted() {
    this.getPosts()
  },
  methods: {
    getPosts () {
       API.getPosts().then((res) => {
        this.posts = res.data.data
      })
    },
  }
}
</script>

<style scoped>

</style>