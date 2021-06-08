<template>
    <b-button variant="primary"  @click="handleLike(data)" class="m-2">
      Likes
      <b-badge variant="light">{{ data.like }}</b-badge>
      <b-icon icon="hand-thumbs-up"/>
    </b-button>
</template>

<script>
import API from "../../api";

export default {
  name: "Like",
  props: {
    data: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    handleLike(item) {
      API.likePost({
        id: item.id,
        like: item.like + 1
      })
    }
  }
}
</script>

<style scoped>

</style>