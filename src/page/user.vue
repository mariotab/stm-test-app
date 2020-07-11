<template>
  <q-page class="user page-container">
    <userCard
      :user="user"
      :isViewButtonShow="false"
    />
  </q-page>
</template>

<script>
import userCard from '../components/user-card'
import { mapState, mapActions } from 'vuex'
export default {
  components: {
    userCard
  },
  props: {
    id: {
      type: [String, Number],
      required: true
    }
  },
  computed: {
    ...mapState({
      user: state => state.users.user
    })
  },
  methods: {
    ...mapActions(['fetchUser'])
  },
  mounted () {
    console.log(this.id, 'this.idthis.idthis.id')
    this.fetchUser({ id: this.id })
  }

}
</script>

<style lang="scss">

</style>
