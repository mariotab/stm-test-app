<template>
  <div id="app">
    <main-layout/>
    <modal-overlay />
  </div>
</template>

<script>
import mainLayout from './layout/main-layout.vue'

export default {
  components: {
    mainLayout,
    modalOverlay: () => import('./components/modal-overlay')
  }
}
</script>

<style lang="scss">
  .page-container {
    max-width: 1200px;
    margin: 0 auto;
  }
</style>
