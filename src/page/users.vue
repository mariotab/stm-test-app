<template>
  <div class="users">
    USERS
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  computed: {
    ...mapActions(['fetchUsers'])
  },
  async mounted () {
    await this.fetchUsers
  }
}
</script>

<style>

</style>
