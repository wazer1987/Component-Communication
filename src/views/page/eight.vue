<template>
  <el-card class="box-card">
    <div style="margin-bottom:10px">父亲组件</div>
    <son1 style="margin-bottom:10px"></son1>
    <son2 style="margin-bottom:10px"></son2>
  </el-card>
</template>

<script>
import son1 from '@/views/page/eight/son1'
import son2 from '@/views/page/eight/son2'
export default {
  components: {
    son1,
    son2
  }

}
</script>

<style>

</style>
