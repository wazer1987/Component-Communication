import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/index.scss'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
Vue.prototype.$dispatch = function (eventName, value) {
  // 当前的组件触发自己的父亲
  let parent = this.$parent
  while (parent) {
    // 如果我的父亲存在 我就去触发事件
    parent.$emit(eventName, value)
    parent = parent.$parent
  }
}
Vue.prototype.$broadcast = function (eventName, value) {
  const broadcast = (children) => {
    children.forEach(child => {
      console.log(child)
      child.$emit(eventName, value)
      if (child.$children) {
        broadcast(child.$children)
      }
    })
  }
  broadcast(this.$children)
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
