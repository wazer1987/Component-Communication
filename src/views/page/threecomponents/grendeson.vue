<template>
  <div>
      <div style="margin-bottom:30px;" >我是孙子组件 我在儿子组件里</div>
      <div style="margin-bottom:30px;">我是孙子组件 我接收了爷爷传过来的值-----{{fathertoson}}</div>
      <el-button type="primary" @click="tofather">向爷爷发送值</el-button>
      <grendson1 @say="say"></grendson1>
  </div>
</template>

<script>
import grendson1 from '@/views/page/threecomponents/grendeson1'
export default {
  components: {
    grendson1
  },
  props: {
    fathertoson: {
      type: String
    }
  },
  data () {
    return {
      grendson: '我是孙子的数据'
    }
  },
  methods: {
    say (res) {
      console.log(res)
    },
    tofather () {
    //   this.$parent.$emit('fatherto', this.grendson)
      this.$dispatch('fatherto', this.grendson)
    }
  }
}
</script>

<style>

</style>
