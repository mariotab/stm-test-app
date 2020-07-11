import { axios } from '../../../service/axios'

export const fetchUsers = async ({ commit }, payload) => {
  try {
    commit('setProcessed', true)
    const res = await axios.get(`/users?page=${payload && payload.page ? payload.page : 1}`)
    console.log(res, 'res-------------')
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
