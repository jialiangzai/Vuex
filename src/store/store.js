

// 导入vuex
import Vuex from 'vuex'
import Vue from 'vue'


import setting from '../setting.js'
import user from '../user.js'
// 注册vuex
Vue.use(Vuex)
// 导出并初始化vuex  ===》挂载到main.js 集中管理采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。可变、响应(数据驱动视图)
export default new Vuex.Store({
  // 定义状态(数据)-------->任意类型 (响应式)         
  state: {
    count: 0,
    msg: '今夜打老虎',
    list: []
  },
  // 定义修改数据的方法(同步)
  mutations: {
    /**
         *
         * @param {*} state 变量    当前申明的state选项中的数据
         * @param {*} payload 外部调用传入的参数（外部指页面组件）
         */
    // Mutation 必须是同步函数
    addCount (state, payload) {
      state.count = state.count + payload
      console.log('组件传过来的数据：', payload)
    },
    // 修改list
    setList (state, list) {
      state.list = list
    }
  },
  // 一般是用来定义获取后台API数据的方法（请求异步的）
  // 定义后台api数据
  actions: {
    /**
       *
       * @param {*} context 上下文 => 包含commit dispatch方法等
       * @param {*} payload 外部调用传入的参数（外部指页面组件）
       */
    getList (context, payload) {
      console.log('action参数：', context, payload)
      // 正常使用axios发请求=》这里使用定时器模拟
      setTimeout(() => {
        // 3s后获取到后台数据=》通过commit调用mucations方法存储数据到state
        context.commit('setList', [4, 5, 6])
      }, 3000)
    }
  },
  // 定义依赖state中的变量计算获取新的变量值
  getters: {
    // value: state => {
    //   return state.value;
    // }
    // 依赖state中的变量，计算获取新的变量值=》类似组件的computed属性     * 

    salary (state) {
      return '我要月薪过' + state.count + '美元！'
    }

  },
  // 定义数据管理模块haul
  modules: {
    // key(模块名):val(模块对象=》接着定义state、mutations、getters、actions)
    setting ,
    user
  }
})