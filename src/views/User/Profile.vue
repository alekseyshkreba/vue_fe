<template>
<div>
  <div class="m-auto p-4" style="background: chocolate; border-radius: 25px; max-width: 400px">
    <p style="border-bottom: 1px solid black">ID: {{ user.id }}</p>
    <p style="border-bottom: 1px solid black">Email: {{ user.email }}</p>
    <p style="border-bottom: 1px solid black">First name: {{ user.first_name }}</p>
    <p style="border-bottom: 1px solid black">Last name: {{ user.last_name }}</p>
    <p style="border-bottom: 1px solid black">Phone: {{ user.phone }}</p>
    <p style="border-bottom: 1px solid black">Gender: {{ user.gender }}</p>
    <div style="display: flex; justify-content: center">
      <b-button class="btn-info">Update user info</b-button>
      <b-button @click="deleteUser" class="btn-danger">Delete user</b-button>
    </div>
  </div>
</div>
</template>

<script>
import API from "../../api";
import { mapState } from 'vuex'

export default {
  name: "Profile",
  data () {
    return {
      profile: ''
    }
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    deleteUser() {
     API.deleteUser(this.user.id)
    }
  },

}
</script>

<style scoped>

</style>