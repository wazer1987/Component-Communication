<template>
  <el-card class="box-card">
    <div style="margin-bottom:30px;">我是爷爷组件</div>
    <div style="margin-bottom:30px;">我是爷爷组件的值----{{issomke}}</div>

    <div style="margin-bottom:30px;">
      <el-button type="primary" @click="getson">我想调用子组件中的方法</el-button>
    </div>
    <son ref="sondom"></son>
  </el-card>
</template>

<script>
import son from '@/views/page/seven/son'

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
    getson () {
      this.$refs.sondom._sonsay(this.issomke)

      // this.$refs.sondom._sonsay()
    },
    fathersay () {
      console.log('我是父亲的方法')
    }
  }
}
</script>

<style>

</style>
