import Vue from 'vue'
import Vuex from 'vuex'

import users from './modules/users'
import main from './modules/main'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    users,
    main
  }
})
