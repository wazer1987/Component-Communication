<template>
    <div>
        <div style="margin-bottom:30px;">我是son2组件</div>
        <div style="margin-bottom:30px;">我是son2组件我接收了父组件传过来的值------{{sondata}}</div>
        <div style="margin-bottom:30px;">我是son2组件自己本身值------{{sontofatherdata}}</div>
        <el-button type="primary" @click="goFahter">son2组件的按钮要修改父组件给我传过来的值</el-button>
    </div>
</template>

<script>
export default {
  props: {
    sondata: {
      type: String
    }
  },
  data () {
    return {
      sontofatherdata: '我是son子组件的值'
    }
  },
  methods: {
    goFahter () {
      this.$emit('update:sondata', this.sontofatherdata)
    }
  }
}
</script>

<style>

</style>
