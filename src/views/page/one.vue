<template>
<el-card class="box-card">
  <div style="margin-bottom:20px;">我是父组件 最外层的页面 在我文件里有个值叫fatherdata 我现在要传给子组件</div>
  <div style="margin-bottom:20px;">我是父组件本身的值我在父组件文件里--------{{fatherdata}}</div>
  <div style="margin-bottom:20px;">我是传统写法改变的------------{{receivesond}}</div>
  <div style="margin-bottom:20px;">我是简化写法改变的------------{{receivesond}}</div>
  <!-- <son :sondata="fatherdata" @updatafather="receiveson"></son> -->
  <son :sondata="fatherdata" @updatafather:receiveson="(value) => this.receivesond = value"></son>
</el-card>
</template>

<script>
import son from '@/views/component/son'
export default {
  components: {
    son
  },
  data () {
    return {
      fatherdata: '我是父组件faterdata的值',
      receivesond: '我在父组件里 我等着接收son组件给我传过来的值 只要son组件一点击按钮我就接收'
    }
  },
  methods: {

  }
}
</script>

<style>
.box-card{
    margin: 50px;
}
</style>
