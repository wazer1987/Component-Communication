<template>
  <div>
      <div style="margin-bottom:30px;">我是孙子</div>
      <div>我是孙子我也调用爷爷的值------{{this.parent.issomke}}</div>
  </div>
</template>

<script>
export default {
  inject: ['parent'],
  methods: {

  }
}
</script>

<style>

</style>
