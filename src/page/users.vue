<template>
  <div class="users">
    <div class="row">
      <div
        class="col-4 q-pa-sm"
        v-for="user in users"
        :key="user.id"
      >
        <q-card class="my-card">
          <img :src="user.avatar">

          <q-card-actions align="right">
            <q-btn flat round color="red" icon="favorite" />
            <q-btn flat round color="teal" icon="bookmark" />
            <q-btn flat round color="primary" icon="share" />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      users: state => state.users.users
    }),
    ...mapActions(['fetchUsers'])
  },
  async mounted () {
    await this.fetchUsers
  }
}
</script>

<style>

</style>
