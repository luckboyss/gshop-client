import { RECEIVE_ADRESS, RECEIVE_CATEGORYS, RECEIVE_SHOPS } from './mutation-type'

const mutations = {
  [RECEIVE_ADRESS](state, { address }) {
    state.address = address
  },
  [RECEIVE_CATEGORYS](state, { categorys }) {
    state.categorys = categorys
  },
  [RECEIVE_SHOPS](state, { shops }) {
    state.shops = shops
  }
}
export default mutations
