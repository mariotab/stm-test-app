<template>
  <div class="user-card">
    <q-card>
      <q-img :src="user.avatar">
        <div class="absolute-bottom">
          <div class="text-h6">{{user['first_name'] + ' ' + user['last_name']}}</div>

          <a
            :href="`mailto:${user.email}`"
            class="user-card-email"
          >
            <div class="text-subtitle2">{{user.email}}</div>
          </a>
        </div>
      </q-img>

      <q-card-actions align="center">
        <q-btn outline color="primary" flat :to="{ name: 'home' }">Посмотреть</q-btn>
        <q-btn outline color="primary" @click="editUser" flat>Редактировать</q-btn>
        <q-btn outline color="deep-orange" @click="deleteUser" flat>Удалить</q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapMutations(['setModal']),
    /**
     * @param {object} conf - is a modal configuration with modal component and user
     * ex { component: 'edit-user', user: this.user}
     */
    openModal (conf) {
      this.setModal(conf)
    },
    editUser () {
      this.openModal({
        component: 'edit-user',
        user: this.user
      })
    },
    deleteUser () {
      this.openModal({
        component: 'delete-user',
        user: this.user
      })
    }
  }

}
</script>

<style lang="scss">
  .user-card-email {
    text-decoration: none;
    color: #fff;
  }
</style>
