import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Layout',
    redirect: 'dashboard',
    component: () => import('../views/layout.vue'),
    children: [
      { path: 'dashboard', name: 'pageone', component: () => import('../views/page/one.vue') },
      { path: 'pagetwo', name: 'pagetwo', component: () => import('../views/page/two.vue') },
      { path: 'pagethree', name: 'pagethree', component: () => import('../views/page/three.vue') },
      { path: 'pagefour', name: 'pagefour', component: () => import('../views/page/four.vue') },
      { path: 'pagefive', name: 'pagefive', component: () => import('../views/page/five.vue') },
      { path: 'pagesix', name: 'pagesix', component: () => import('../views/page/six.vue') },
      { path: 'pageseven', name: 'pageseven', component: () => import('../views/page/seven.vue') },
      { path: 'pageeight', name: 'pageeight', component: () => import('../views/page/eight.vue') },
      { path: 'pagenine', name: 'pagenine', component: () => import('../views/page/nine.vue') }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
