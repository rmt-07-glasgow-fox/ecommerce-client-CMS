import mutations from './mutationProduct.js'
import actions from './actionProduct.js'
import getters from './getterProduct.js'

export default {
  state: {
    products: {},
    product: {}
  },
  mutations,
  actions,
  getters
}
