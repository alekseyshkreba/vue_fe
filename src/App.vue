<template>

  <div id="app">
    <div id="nav">
      <template v-if="!isLoggedIn">
        <router-link to="/">Home</router-link> |
        <router-link to="/login">Login</router-link> |
        <router-link to="/register">Register</router-link>
      </template>
      <template v-else>
        <router-link to="/profile">Profile</router-link> |
        <router-link to="/posts">Posts</router-link> |
        <router-link to="/post/create">Create post</router-link> |
        <span @click="handleLogout">Logout</span>
      </template>
    </div>
    <router-view />
  </div>
</template>

<script>

export default {
  computed : {
    isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
  },
  methods: {
    handleLogout() {
      this.$store.dispatch('logout')
          .then(() => {
            this.$router.push('/login')
          })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
