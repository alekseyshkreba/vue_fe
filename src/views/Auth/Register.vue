<template>
  <div class="w-25 m-auto">
    <b-form @submit.prevent="onRegister" @reset="onReset">
      <b-form-input
          type="text"
          size="lg"
          placeholder="First name"
          v-model="form.first_name"
          required
      />
      <b-form-input
          class="mt-3"
          type="text"
          size="lg"
          placeholder="Last name"
          v-model="form.last_name"
          required
      />
      <b-form-select
          class="form-control-lg"
          placeholder="Country of Organisation"
          autocomplete="country"
          id="country_of_organisation"
          v-model="form.gender"
          size="lg"
          :options="gender_type || []"
          required
      />
      <b-form-input
          class="mt-3"
          type="text"
          size="lg"
          placeholder="Phone"
          v-model="form.phone"
          required
      />
      <b-form-input
          class="mt-3"
          type="email"
          size="lg"
          placeholder="Email"
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

      <b-button-group class="mt-4" size="lg">
        <b-button type="submit" variant="success">Register</b-button>
        <b-button type="reset" variant="danger">Clear</b-button>
      </b-button-group>

    </b-form>
  </div>
</template>

<script>

export default {
  name: "Register",
  data () {
    return {
      gender_type: ["Male", "Female"],
      form: {
        first_name: '',
        last_name: '',
        gender: '',
        phone: '',
        email: '',
        password: '',
      }
    }
  },
  methods: {
    onReset (event) {
      event.target.reset();
    },
    onRegister () {
      this.$store.dispatch('register', this.form)
          .then(() => this.$router.push('/'))
          .catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>

</style>