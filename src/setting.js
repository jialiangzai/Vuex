export default {
  namespaced: true, //开启命名空间=》让模块和父模块隔离默认是false
  state: {
    title: '黑马头条app',
  },
  mutations: {
    setTitle (state, payload) {
      state.title = payload
    }
  }
}