<template>
  <div>
      我是孙子一 在我的mouted里 调用son2中的方法
  </div>
</template>

<script>
export default {
  mounted () {
    this.$nextTick(() => {
      this.$bus.$emit('xxxx')
    })
  }
}
</script>

<style>

</style>
