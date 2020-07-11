<template>
  <q-card>
    <q-card-section class="row items-center">
      <span class="q-ml-sm">DO YOU REALLY WANT DELETE USER ?</span>
    </q-card-section>

    <q-card-actions align="center">
      <q-btn flat label="NO" color="primary" v-close-popup />
      <q-btn flat label="YES" color="orange" @click="userDelete" />
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
    }
  },
  methods: {
    ...mapActions(['deleteUser']),
    async userDelete () {
      await this.deleteUser({ id: this.user.id })
      this.$emit('closeModal')
      this.$route.name === 'user' && this.$router.push({ name: 'users' })
    }
  }
}
</script>

<style>
</style>
