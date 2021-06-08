<template>
<div class="w-25 m-auto">
  <b-form @submit.prevent="onSignIn">
    <b-form-input
        type="email"
        placeholder="Email"
        size="lg"
        v-model="form.email"
        required
    />
    <b-form-input
        class="mt-3"
        type="password"
        size="lg"
        placeholder="Password"
        v-model="form.password"
        required
    />
    <b-btn
        type="submit"
        size="lg"
        class="mt-3 btn-success">
      Sign in
    </b-btn>
  </b-form>
</div>

</template>

<script>

export default {
  name: "Login",
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    onSignIn () {
      this.$store.dispatch('login', this.form)
          .then(() => this.$router.push('/'))
          .catch(err => this.$toast.error(err))
    }
  }
}
</script>

<style scoped>

</style>