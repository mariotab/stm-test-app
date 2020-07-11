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
  data () {
    return {
      current: 1
    }
  },
  methods: {
    input (val) {
      this.$emit('input', val)
    }
  }
}
</script>
