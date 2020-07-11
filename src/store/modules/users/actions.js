import { axios } from '../../../service/axios'

export const fetchUsers = async ({ commit }, payload) => {
  try {
    commit('setProcessed', true)
    const res = await axios.get(`/users?page=${payload && payload.page ? payload.page : 1}`)
    console.log(res, 'res-------------fetchUsers')
    commit('setUsers', res.data.data)
    commit('setUsersData', {
      total: res.data.total,
      page: res.data.page,
      perPage: res.data.per_page,
      totalPage: res.data.total_pages
    })
    commit('setProcessed', false)
  } catch (e) {
    commit('setError', e)
    commit('setProcessed', false)
    console.log(e)
  }
}

export const fetchUser = async ({ commit }, payload) => {
  try {
    commit('setProcessed', true)
    const res = await axios.get(`/users/${payload.id}`)
    console.log(res, 'res-------------fetchUser')
    commit('setUser', res.data.data)
    commit('setProcessed', false)
  } catch (e) {
    commit('setError', e)
    commit('setProcessed', false)
    console.log(e)
  }
}

export const editUser = async ({ state, commit }, payload) => {
  try {
    commit('setProcessed', true)
    const res = await axios.put(`/users/${payload.id}`, {
      name: payload.firstName + ' ' + payload.lastName,
      job: payload.job
    })
    console.log(res, 'res-------------editUser')
    commit('setUsers', state.users.map(user => {
      if (user.id !== payload.id) return user
      else return { ...user, first_name: payload.firstName, last_name: payload.lastName }
    }))
    if (+state.user.id === +payload.id) commit('setUser', { ...state.user, first_name: payload.firstName, last_name: payload.lastName })
    commit('setProcessed', false)
  } catch (e) {
    commit('setError', e)
    commit('setProcessed', false)
    console.log(e)
  }
}

export const deleteUser = async ({ state, commit }, payload) => {
  try {
    commit('setProcessed', true)
    const res = await axios.delete(`/users/${payload.id}`)
    console.log(res, 'res-------------editUser')
    commit('setUsers', state.users.filter(user => user.id !== payload.id))
    commit('setProcessed', false)
  } catch (e) {
    commit('setError', e)
    commit('setProcessed', false)
    console.log(e)
  }
}

export const createNewUser = async ({ state, commit }, payload) => {
  try {
    commit('setProcessed', true)
    const res = await axios.post('/users}', {
      name: payload.firstName + ' ' + payload.lastName,
      job: payload.job
    })
    console.log(res, 'res-------------createNewUser')
    commit('setUsers', [...state.users, {
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg',
      email: 'test.lawson@reqres.in',
      first_name: payload.firstName,
      id: res.data.id,
      last_name: payload.lastName
    }])
    commit('setProcessed', false)
  } catch (e) {
    commit('setError', e)
    commit('setProcessed', false)
    console.log(e)
  }
}
