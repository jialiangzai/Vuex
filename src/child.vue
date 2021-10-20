<template>
  <div>
    <h2>子组件=>渲染列表</h2>
    <ul>
      <li v-for="item in list" :key="item">{{ item }}</li>
    </ul>
    <ul>
      <!-- <li>{{ $store.getters.salary }}</li> -->
      <li>{{ $store.getters.salary }}</li>
      <li>
        <button @click="addSalary">修改月薪</button>
      </li>
      <li>获取子模块数据：{{ $store.state.setting.title }}</li>
      <li>
        <button @click="changeTitle">修改子模块数据</button>
      </li>
       <li>{{ title }}, {{ token }}</li>
    </ul>
  </div>
</template>

<script>
// mapState mapGetters 使用是在计算属性中是变量
//  mapMutations mapMutations 方法书写在methods中
import { mapState, mapMutations, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState(['list']),
    ...mapState('setting',['title']),
    ...mapState('user',['token']),
    ...mapGetters(['salary'])
  },
  created () {
    console.log('子-获取vuex实例：', this.$store)
  },
  methods: {
    // mapMutations可以多次使用
    // ...mapMutations(['addCount']),
    ...mapMutations(['addCount', 'setting/setTitle']),
    // 说明：mapMutations('模块名',['该模块下的mucations方法名1'])
    ...mapMutations('setting', ['setTitle']),
    addSalary () {
      this.addCount(Math.random() * 10000 + 1)
    },
    changeTitle () {
      console.log(this)
      // this['setting/setTitle']('红马')
      this.setTitle('白马头条app')
    }
  }

}
</script>

<style lang="less" scoped>
</style>
