<template>
  <el-card class="box-card">
    <div style="margin-bottom:30px;">我是爷爷组件</div>
    <div style="margin-bottom:30px;">我是爷爷组件的值----{{grendeFather}}</div>
    <son :fatherwoson="grendeFather" @fatherto="change"></son>
  </el-card>
</template>

<script>
import son from '@/views/page/threecomponents/son'
export default {
  components: {
    son
  },
  mounted () {
    this.$broadcast('say', '我在爷爷组件里向下传递了值')
    // console.log(this.$children[0].$children[0].say())
  },
  data () {
    return {
      grendeFather: '我是爷爷的数据'
    }
  },
  methods: {
    change (res) {
      this.grendeFather = res
    }
  }
}
</script>

<style>

</style>
