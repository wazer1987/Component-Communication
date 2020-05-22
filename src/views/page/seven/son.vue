<template>
  <div>
      <div style="margin-bottom:30px;">我是儿子------{{son}}</div>
      <el-button type="primary" @click="update">我要修改值了</el-button>
      <grandeson></grandeson>
  </div>
</template>

<script>
import grandeson from '@/views/page/seven/grandeson'
export default {
//   inheritAttrs: false,
  components: {
    grandeson
  },
  data () {
    return {
      son: '爸爸快来修改我'
    }
  },
  methods: {
    update () {

      // console.log('我也是子组件中的方法')
    },
    _sonsay (res) {
      this.son = res
      console.log('我是son中的方法')
    }
  }

}
</script>

<style>

</style>
