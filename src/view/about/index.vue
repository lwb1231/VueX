<template>
    <div>
        <!-- 头部 -->
        <head-com></head-com>
        我是关于页
        <button @click='fun1'>去首页</button>
        <button @click='add'>获取</button>
        <button @click='up'>修改</button>
    </div>
</template>
<script>
import headCom from '../../components/headerCom'
export default{
  name: 'about',
  methods: {
    fun1 () {
    //   this.$router.push({path: '/home?id=' + 123})
      this.$router.push({path: '/home', query: {id: 122}})
    },
    add () {
      console.log(this.$store.state.count)
    },
    up () {
      this.$store.commit('increment')
    }
  },
  components: {
    headCom
  },
  mounted () {
    var name2 = this.$route.params.name
    console.log(name2)
  }

}
</script>
<style scoped>

</style>
