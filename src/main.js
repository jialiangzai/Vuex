import Vue from 'vue'
import App from './App.vue'
import store from './store/store.js'
Vue.config.productionTip = false

new Vue({
  // 挂载store 所有组件都可以使用它的属性和方法
  store,
  render: h => h(App),
}).$mount('#app')
