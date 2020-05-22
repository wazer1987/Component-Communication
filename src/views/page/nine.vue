<template>
  <el-card class="box-card">
      <div style="margin-bottom:30px;">render函数 函数式组件 JSX</div>
      <div>
        <level :numbner="1">标题</level>
        <level :numbner="2">标题</level>
        <level :numbner="3">标题</level>
        <level :numbner="4">标题</level>
      </div>
  </el-card>
</template>

<script>
import level from '@/views/page/nine/nine'
export default {
  components: {
    level
  }
}
</script>

<style>
.box-card{
    margin: 50px;
}
</style>
