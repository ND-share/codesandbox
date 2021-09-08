export const state = () => ({
  fn: null,
})

export const mutations = {
  setFunction(state, payload) {
    state.fn = payload
  },
}

export const getters = {
  fn(state) {
    return state.fn
  },
}

export const actions = {
  setFunction({ commit }, payload) {
    commit('setFunction', payload)
  },
}
