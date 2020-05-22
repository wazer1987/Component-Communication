<template>
  <div>
      <div style="margin-bottom:30px;">我是儿子</div>
      <div style="margin-bottom:30px;">我是爸爸传过来的数据----{{$attrs}}---{{one}}</div>
      <grandeson v-bind="$attrs" v-on="$listeners"></grandeson>
  </div>
</template>

<script>
import grandeson from '@/views/page/five/grandeson'
export default {
//   inheritAttrs: false,
  components: {
    grandeson
  },
  props: {
    one: {
      type: String
    },
    two: {
      type: String
    },
    three: {
      type: String
    }
  }
}
</script>

<style>

</style>
