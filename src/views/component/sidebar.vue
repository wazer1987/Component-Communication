<template>
  <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      router
      active-text-color="#ffd04b">
      <el-menu-item :index="item.path" v-for="item in data" :key="item.label">
         {{item.label}}
      </el-menu-item>
    </el-menu>
</template>

<script>
export default {
  name: 'sidebar',
  data () {
    return {
      data: [
        { label: '组件通信最基本方式一', path: 'dashboard' },
        { label: '组件通信修改同一值 .sync', path: 'pagetwo' },
        { label: '组件通信(子孙)', path: 'pagethree' },
        { label: '组件通信(子孙)向上派发/向下广播', path: 'pagefour' },
        { label: '$attr $listeners', path: 'pagefive' },
        { label: 'provide/inject', path: 'pagesix' },
        { label: 'ref/$refs', path: 'pageseven' },
        { label: 'eventBus', path: 'pageeight' },
        { label: 'render函数 JSX ', path: 'pagenine' }
      ]
    }
  }
}
</script>

<style>

</style>
