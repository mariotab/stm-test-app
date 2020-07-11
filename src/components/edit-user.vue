<template>
  <q-card class="edit-user">

    <q-card-section class="q-pt-none">
      <q-input
        v-model="firstName"
        label="First name"
        :error-message="validataion(firstName).message"
        :error="!validataion(firstName).valid"
    />
      <q-input
        v-model="lastName"
        label="Last name"
        :error-message="validataion(lastName).message"
        :error="!validataion(lastName).valid"
      />
      <q-input
        v-model="job"
        label="Job"
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      <q-input
        v-model="password"
        type="password"
        label="Password"
        :rules="[ val => val && val.length > 8 || 'Please use more then 8 characters']"
      />
      <q-input v-model="confirmPassword" type="password" label="Confirm password" />
    </q-card-section>

    <q-card-actions align="right" class="text-primary">
      <q-btn flat label="Cancel" v-close-popup />
      <q-btn
        v-if="createUser"
        flat
        label="Create user"
        :disable="!disableBtn"
        @click="userCreate"
      />
      <q-btn
        v-else
        flat
        label="Edit user"
        :disable="!disableBtn"
        @click="userEdit"
      />
    </q-card-actions>
  </q-card>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    user: {
      type: Object,
      default: () => ({})
    },
    createUser: {
      type: Boolean,
      default: false
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
  computed: {
    disableBtn () {
      return this.validataion(this.firstName).valid &&
        this.validataion(this.lastName).valid &&
        !!this.job?.length &&
        this.password === this.confirmPassword
    }
  },
  methods: {
    ...mapActions([
      'editUser',
      'createNewUser'
    ]),
    /**
    * @param {string} str
    * @return {object}
    */
    validataion (str) {
      return str?.length < 3
        ? { valid: false, message: 'Please use more then 3 characters' }
        : str?.length > 20
          ? { valid: false, message: 'Please use maximum 20 characters' }
          : { valid: true, message: '' }
    },
    async userEdit (id) {
      await this.editUser({
        id: this.user.id,
        firstName: this.firstName,
        lastName: this.lastName,
        job: this.job
      })
      this.$emit('closeModal')
    },
    async userCreate () {
      await this.createNewUser({
        firstName: this.firstName,
        lastName: this.lastName,
        job: this.job
      })
      this.$emit('closeModal')
    }
  },
  created () {
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
