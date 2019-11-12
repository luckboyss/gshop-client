import { RECEIVE_ADRESS, RECEIVE_CATEGORYS, RECEIVE_SHOPS } from './mutation-type'
import { reqAddress, reqFoodCategorys, reqShops } from '../api'
const actions = {
  async getAddress({ commit, state }) {
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)
    if (result.code === 0) {
      const address = result.data
      commit(RECEIVE_ADRESS, { address })
    }
  },
  async getFoodCategorys({ commit }) {
    const result = await reqFoodCategorys()
    if (result.code === 0) {
      const categorys = result.data
      commit(RECEIVE_CATEGORYS, { categorys })
    }
  },
  async getShops({ commit, state }) {
    const { longitude, latitude } = state
    const result = await reqShops({ longitude, latitude })
    if (result.code === 0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, { shops })
    }
  }
}
export default actions
