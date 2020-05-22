<template>
  <div class="layout-contaienr">
     <div class="sidebar-container">
         <sidebar class="sidebar"/>
     </div>
      <div class="main-container">
          <router-view />
      </div>
  </div>
</template>

<script>
import sidebar from '@/views/component/sidebar.vue'
export default {
  components: {
    sidebar
  }
}
</script>

<style lang="scss" scoped>
.layout-contaienr{
    width: 100%;
    height: 100%;
    display: flex;
    .sidebar-container{
        width: 200px;
        background: blue;
        .sidebar{
            height: 100vh;
        }
    }
    .main-container{
        flex: 1;
        height: 100vh;
    }
}
</style>
