import Vue from 'vue'
import VueRouter from 'vue-router'
import FlyingMask from "@/layouts/FlyingMask";
import WeatherCast from "@/layouts/WeatherCast";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: FlyingMask
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },{
    path:'/weather',
    name:'weather_cast',
    component: WeatherCast
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
