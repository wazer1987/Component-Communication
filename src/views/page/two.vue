<template>
<el-card class="box-card">
    <div style="margin-bottom:30px;">我是父组件</div>
    <div style="margin-bottom:30px;">{{fatherdata}}</div>
    <son2 :sondata.sync="fatherdata"></son2>

</el-card>
</template>

<script>
import son2 from '@/views/component/son2'
export default {
  components: {
    son2
  },
  data () {
    return {
      fatherdata: '我是父组件fatherdata的值'
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
