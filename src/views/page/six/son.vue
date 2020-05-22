<template>
  <div>
      <div style="margin-bottom:30px;">我是儿子</div>
      <div style="margin-bottom:30px;">暴露爸爸了拿到里面了的东西了-----{{parent.issomke}}</div>
      <el-button type="primary" @click="update">我要修改值了</el-button>
      <grandeson></grandeson>
  </div>
</template>

<script>
import grandeson from '@/views/page/six/grandeson'
export default {
//   inheritAttrs: false,
  components: {
    grandeson
  },
  methods: {
    update () {
      this.parent.issomke = '1111'
      this.parent.say()
    }
  },
  inject: ['parent']
}
</script>

<style>

</style>
