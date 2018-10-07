export const state = () => ({
  successURI: ''
})

export const mutations = {
  success( uri ) {
    state.successUri = uri
  }
}