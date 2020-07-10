<template>
  <div>
    <q-layout view="hHh Lpr lff" container class="main-layout">
      <q-header elevated>
        <q-toolbar class="glossy">
          <q-btn flat round dense icon="menu" class="q-mr-sm" @click="drawer = !drawer" />

          <q-toolbar-title>Stamax</q-toolbar-title>

          <q-btn flat round dense icon="whatshot" />
        </q-toolbar>
      </q-header>
      <q-drawer
        v-model="drawer"
        show-if-above
        :width="200"
        :breakpoint="500"
        bordered
        content-class="bg-grey-3"
      >
        <q-scroll-area class="fit">
          <q-list v-for="menuItem in menuList" :key="menuItem.label" @click="navigation(menuItem.to)">
            <q-item clickable :active="isMenuItemActive(menuItem.to)" v-ripple>
              <q-item-section avatar>
                <q-icon :name="menuItem.icon" />
              </q-item-section>
              <q-item-section>{{ menuItem.label }}</q-item-section>
            </q-item>

            <q-separator v-if="menuItem.separator" />
          </q-list>
        </q-scroll-area>
      </q-drawer>
      <q-page-container>
        <q-page class="q-pa-md">
          <router-view/>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      menuList: [
        {
          icon: 'home',
          label: 'home',
          to: 'home',
          separator: false
        },
        {
          icon: 'group',
          label: 'users',
          to: 'users',
          separator: false
        }
      ]
    }
  },
  methods: {
    /**
    * @param {string} menuItemTo
    * return boolean
    */
    isMenuItemActive (menuItemTo) {
      return this.$route ? menuItemTo === this.$route.name : false
    },
    /**
    * @param {string} menuItemTo
    */
    navigation (menuItemTo) {
      this.$route.name !== menuItemTo && this.$router.push({ name: menuItemTo })
    }
  }
}
</script>

<style lang="scss" scoped>
.main-layout {
  min-height: 100vh;
}
</style>
