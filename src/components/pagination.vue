<template>
  <div class="q-pa-lg flex flex-center">
      <q-pagination
        v-model="current"
        color="primary"
        :max="max"
        :max-pages="maxPages"
        :ellipses="false"
        :boundary-numbers="false"
        @input="input"
      >
      </q-pagination>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  props: {
    max: {
      type: Number,
      default: 10
    },
    maxPages: {
      type: Number,
      default: 5
    }
  },
  computed: {
    ...mapState({
      usersData: state => state.users.usersData
    }),
    current: {
      get () {
        return this.usersData.page || 1
      },
      set (value) {
        this.setUsersData({ ...this.usersData, page: value })
      }
    }
  },
  methods: {
    ...mapMutations(['setUsersData']),
    input (val) {
      this.$emit('input', val)
    }
  }
}
</script>
