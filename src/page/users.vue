<template>
  <q-page class="users page-container">
    <div class="row">
      <user-card
        class="col-4 q-pa-sm"
        v-for="user in users"
        :key="user.id"
        :user="user"
      />
    </div>
    <pagination
      :max="usersData.totalPage"
      @input="paginationChanged"
    />
  </q-page>
</template>

<script>
import { mapActions, mapState } from 'vuex'

import pagination from '../components/pagination'
import userCard from '../components/user-card'
export default {
  components: {
    pagination,
    userCard
  },
  computed: {
    ...mapState({
      users: state => state.users.users,
      usersData: state => state.users.usersData
    })
  },
  methods: {
    ...mapActions(['fetchUsers']),
    /**
     * we call this method when page numbering has changed
     * @param {number} page
     */
    paginationChanged (page) {
      this.fetchUsers({ page })
    }
  },
  async mounted () {
    await this.fetchUsers()
  }
}
</script>

<style lang="scss">
</style>
