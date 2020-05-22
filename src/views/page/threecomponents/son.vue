<template>
    <div>
        <div style="margin-bottom:30px;">我是儿子</div>
        <div style="margin-bottom:30px;">我是儿子组件 我接收了 父组件传过来的值------ {{fatherwoson}}</div>
        <grendeson :fathertoson="fatherwoson" @say="sayhi"></grendeson>
    </div>
</template>

<script>
import grendeson from '@/views/page/threecomponents/grendeson'
export default {
  components: {
    grendeson
  },
  props: {
    fatherwoson: {
      type: String
    }
  },
  methods: {
    sayhi () {
      console.log('sayHi')
    }
  },
  data () {
    return {}
  }

}
</script>

<style>

</style>
