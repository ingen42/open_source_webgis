import Vue from 'vue'
import VueRouter from 'vue-router'
import OLHome from '../views/OLHome'
import MapboxGLHome from '../views/MapboxGLHome'
import TurfHome from '../views/TurfHome'

Vue.use(VueRouter)
const routes = [
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },{
    path: '/ol/home',
    name: 'OLHome',
    component: OLHome
  },{
    path: '/mapboxgl/home',
    name: 'MapboxGLHome',
    component: MapboxGLHome
  }, {
    path: '/turf/home',
    name: 'TurfHome',
    component: TurfHome
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
