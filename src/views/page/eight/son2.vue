<template>
  <div>
      我是儿子二
  </div>
</template>

<script>
export default {
  mounted () {
    this.$bus.$on('xxxx', function () {
      console.log(111)
    })
  }
}
</script>

<style>

</style>
