import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import MapboxGLHome from '../views/MapboxGLHome'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/mapboxgl/home',
    name: 'MapboxGLHome',
    component: MapboxGLHome
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
