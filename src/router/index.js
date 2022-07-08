import Vue from 'vue'
import VueRouter from 'vue-router'
import SearchView from '@/views/SearchView.vue'
import TicketsView from '@/views/TicketsView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'search',
    component: SearchView
  }/*,
  {
    path: '/tickets',
    name: 'tickets',
    component: TicketsView
  }*/
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
