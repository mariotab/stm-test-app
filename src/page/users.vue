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
    <q-btn
      round color="primary"
      icon="person_add"
      class="fixed-bottom-right add-user q-ma-md"
      size="lg"
      @click="createUser"
    />
  </q-page>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'

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
    ...mapMutations(['setModal']),
    /**
     * we call this method when page numbering has changed
     * @param {number} page
     */
    paginationChanged (page) {
      this.fetchUsers({ page })
    },
    createUser () {
      this.setModal({ component: 'edit-user', user: {}, createUser: true })
    }
  },
  async mounted () {
    !this.users.length && await this.fetchUsers()
  }
}
</script>

<style lang="scss">
</style>
