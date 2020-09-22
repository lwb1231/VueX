<template>
    <div>
        <!-- 头部 -->
        <head-com :obj='obj' @msg='getMsg'></head-com>
        我是首页
        <button @click='fun'>去关于页</button>
        <router-link to='../login'>去登陆</router-link>
        <div class="test">
            <span>sssss</span>
            <p>四十级司法解释 <span>我是孙级</span></p>
        </div>
    </div>
</template>
<script>
import headCom from '../../components/headerCom'
export default{
  name: 'home',
  data () {
    return {
      obj: '我是父组件'
    }
  },
  methods: {
    fun () {
      this.$router.push({name: 'About', params: {name: '123'}})
    },
    getMsg (val) {
      console.log(val)
    }
  },
  mounted () {
    console.log(this.$route.query.id)
    console.log(this.$store.state.count)
  },
  components: {
    headCom
  }
}
</script>
<style scoped lang="scss">
    $height:20px;
    $c:red;
    $b:blue;
    $y:yellow;
    .test{
        height: $height;
        p{
            color: $c;
        }
        span{
            color: $b;
        }
        h5{
            color: $y;
            span{
                color: $b;
            }

        }
    }

    </style>
