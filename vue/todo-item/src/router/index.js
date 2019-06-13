import Vue from 'vue'
import Router from 'vue-router'
import Home from '_v/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('_v/About.vue')
    }
  ]
})
