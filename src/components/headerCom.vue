<template>
    <div>
        我是头部
        <button @click='uMsg'>点击</button>
        <button @click='getFu'>获取父组件</button>
    </div>
</template>
<script>
export default{
  props: ['obj'],
  name: 'headerCom',
  data () {
    return {
      msg: '我是子组件'
    }
  },
  methods: {
    uMsg () {
      this.$emit('msg', this.msg)
    },
    getFu () {
      console.log(this.obj)
    }
  },
  mounted () {
  }
}
</script>
<style scoped>

</style>
