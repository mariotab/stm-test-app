<template>
  <q-dialog v-model="showModal">
    <q-card style="min-width: 350px">
      <keep-alive> <!-- we don't need use keep-alive here, but for demonstration we use it )-->
        <component
          v-if="modal"
          :is="modal.component"
          :user="modal.user"
        />
      </keep-alive>
    </q-card>
  </q-dialog>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  components: {
    editUser: () => import('./edit-user')
  },
  computed: {
    ...mapState({
      modal: state => state.main.modal
    }),
    showModal: {
      get () {
        return this.modal && true
      },
      set () {
        this.setModal(null)
      }
    }
  },
  methods: {
    ...mapMutations(['setModal'])
  }
}
</script>

<style lang="scss">
</style>
