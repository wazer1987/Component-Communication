<template>
  <el-card class="box-card">
    <div style="margin-bottom:30px;">我是爷爷组件</div>
    <div style="margin-bottom:30px;">我是爷爷组件的值----{{issomke}}</div>
    <son></son>
  </el-card>
</template>

<script>
import son from '@/views/page/six/son'

export default {
  components: {
    son
  },
  data () {
    return {
      issomke: '我是爷爷的值'
    }
  },
  methods: {
    say () {
      console.log('我是父亲的方法')
    }
  },
  provide () {
    return {
      parent: this
    }
  }
}
</script>

<style>

</style>
