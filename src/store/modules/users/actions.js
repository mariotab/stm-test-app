import { axios } from '../../../service/axios'

export const fetchUsers = async ({ commit }, payload) => {
  try {
    commit('setProcessed', true)
    const res = await axios.get(`/users?page=${payload.id ? payload.id : 1}`)
    console.log(res, 'res-------------')
    commit('setUsers', res.data.data)
    commit('setProcessed', false)
  } catch (e) {
    commit('setError', e)
    commit('setProcessed', false)
    console.log(e)
  }
}
