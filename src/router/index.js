import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter);

const routes = [
  {
    path:'/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import("../pages/home")
  },
  {
    path: '/music_menu*',
    name: 'music_menu',
    component: () => import("../pages/music_menu"),
    // props: route => ({id: route.params.id})
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
