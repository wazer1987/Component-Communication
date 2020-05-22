<template>
  <div>
      我是son1组件 也就是在father文件里的son标签 我在自己的文件接收了father给我传过来的值 fatherdata
      <div>
          {{sondata}}
      </div>
      <div>
        我是传统方法改变
        <el-button type="primary" @click="gofather">我是son组件的按钮 我现在想把值传给父组件</el-button>
      </div>

  </div>
</template>

<script>
export default {
  props: {
    sondata: {
      type: String,
      default: () => {
        return 11
      }
    }
  },
  data () {
    return {
      sonselfdata: '我是子组件本身的值'
    }
  },
  methods: {
    gofather () {
      this.$emit('updatafather:receiveson', this.sonselfdata)
    }
  }
}
</script>

<style>

</style>
