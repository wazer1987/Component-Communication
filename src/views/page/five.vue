<template>
  <el-card class="box-card">
    <div style="margin-bottom:30px;">我是爷爷组件</div>
    <div style="margin-bottom:30px;">我是爷爷组件的值----{{grendeFather}}</div>
    <son :one="grendeFather" :two="testdataone" :three="testdatatwo" @say="fathersay"></son>
  </el-card>
</template>

<script>
import son from '@/views/page/five/son'
export default {
  components: {
    son
  },
  data () {
    return {
      grendeFather: '我是爷爷文件里的数据',
      testdataone: '我是测试数据一',
      testdatatwo: '我是测试数据二'
    }
  },
  methods: {
    fathersay (res) {
      console.log('我是父亲里的打印方法')
      console.log(res)
    }
  }
}
</script>

<style>
.box-card{
    margin: 50px;
}
</style>
