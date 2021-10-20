<template>
  <div id="app">
    <!-- 太长 -->
    <p>{{ $store.state.count }}</p>
    <!-- 优化一 计算属性，因为缓存不执行当一个组件需要获取多个状态的时候，将这些状态都声明为计算属性会有些重复和冗余。 -->
    <p>{{ count }}</p>
    <!-- 优化二  使用辅助函数mapState -->
    <p>{{ count }}</p>
    <p>{{ msg }}</p>
    <!--  -->
    <li>
      <button @click="changeVuex">修改vuex数据</button>
    </li>
    <!-- actions -->
    <li>{{ list }}</li>
    <Child />
  </div>
</template>

<script>
// 引入map函数 它是vuex中的一个方法
import { mapState, mapMutations } from 'vuex'
import Child from './child.vue'
export default {
  name: 'App',
  components :{
    Child
  },
  data () {
    return {
      hi: 'hi data!'
    }
  },
  computed: {
    // 通过计算属性快速获取vuex的值==》有缓存 ，简化写法     
    count () {
      return this.$store.state.count
    },
    // 当一个组件需要获取多个状态的时候，将这些状态都声明为计算属性会有些重复和冗余。
    // mapState函数返回值是对象
    // 对象形式
    //    computed: mapState({
    //   // 1. 基础写法 (state) 代表就是vuex申明的state 
    //   count1: function (state) {
    //     return state.count
    //   },
    //   // 2. 使用箭头函数 不能使用剪头函数  this指向的不是vue实例
    //   count2: state => state.count,
    //   // 3. vuex提供写法 (count是state中的字段名称)
    //   count3: 'count',
    //   // 4. 当你的计算属性 需要依赖vuex中的数据 同时  依赖组件中data的数据
    //   myCount (state) {
    //     return state.count + this.num
    //   }
    // })
    // 数组形式
    // 变量名一定要和store.js中的state的键一致，逗号分隔
    //  2. mapState=》作用：简化获取到的vuex变量（推荐） 
    // 2. mapState([state变量名1,state变量名1])=》作用：简化获取到的vuex变量（推荐）
    //  原理：mapState()函数返回值是个对象=>根据传入的数组的值，生成计算属性的函数 {count函数，msg函数 }  this就能获取模板去除this 直接用
    // ...mapState(['count', 'msg'])
    // mapState([state变量名1,state变量名1])=》作用：简化获取到的vuex变量（推荐）
    //  原理：mapState()函数返回值是个对象=>根据传入的数组的值，生成计算属性的函数


    ...mapState(['count', 'msg', 'list']) // 生成计算属性

  },
  created () {
    console.log('获取vuex的实例', this.$store)
    console.log('获取vuex实例的state数据', this.$store.state)
  },
  // 组件调用：
  methods: {
    /**
     * 修改vuex数据:
     * 1. 通过$store.commit(mutations中定义修改state数据的函数名,传入数据)
     */
    // changeVuex () {
    //   this.$store.commit('addCount', Math.random() * 100)
    // }
    // * 修改vuex数据:
    //  * 1. 通过$store.commit(mutations中定义修改state数据的函数名,传入数据)
    //  * 2. 通过mapMutations方法获取vuex中修改state数据的方法（推荐）
    ...mapMutations(['addCount']),
    changeVuex () {
      this.addCount(Math.random() * 100)
    }
  }
}
</script>

<style>
</style>
