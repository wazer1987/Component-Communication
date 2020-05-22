<template>
  <div>
      <div style="margin-bottom:30px;">我是孙子</div>
      <div style="margin-bottom:30px;">{{$attrs}}</div>
      <el-button type="primary" @click="btn">我要触发listenter</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    btn () {
      this.$listeners.say('我是孙子传过来的值')
    }
  }
}
</script>

<style>

</style>
