<template>
  <q-card class="edit-user">

    <q-card-section class="q-pt-none">
      <q-input v-model="firstName" label="First name" />
      <q-input v-model="lastName" label="Last name" />
      <q-input v-model="job" label="Job" />
      <q-input v-model="password" type="password" label="Password" />
      <q-input v-model="confirmPassword" type="password" label="Confirm password" />
    </q-card-section>

    <q-card-actions align="right" class="text-primary">
      <q-btn flat label="Cancel" v-close-popup />
      <q-btn flat label="Add address" v-close-popup />
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      firstName: null,
      lastName: null,
      job: null,
      password: null,
      confirmPassword: null
    }
  },
  mounted () {
    this.firstName = this.user.first_name
    this.lastName = this.user.last_name
  }
}
</script>

<style lang="scss">
  .edit-user {
      min-width: 450px;
  }
</style>
