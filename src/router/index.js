import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter);

const routes = [
  {
    path:'/',
    redirect: '/home/list'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import("../pages/home"),
    children:[
      {path: '/home/list', component: () => import("../components/music_list")},
      {path: '/home/rank', component: () => import("../components/rank")},
      {path: '/home/songer', component: () => import("../components/songer")}

    ]
  },
  {
    path: '/music_menu*',
    name: 'music_menu',
    component: () => import("../pages/music_menu"),
    // props: route => ({id: route.params.id})
  },
  {
    path: '/lyric*',
    name: 'lyric',
    component: () => import("../pages/lyric"),
  },
  {
    path: '/rankList*',
    name: 'rankList',
    component: () => import("../pages/rankList"),
  },
  {
    path: '/search*',
    name: 'search',
    component: () => import("../pages/search"),
    children:[
      {path: '/search/searchSonger*', component: () => import("../components/searchSonger")},
      // {path: '/search/searchSing', component: () => import("../components/rank")},
      // {path: '/search/searchMV', component: () => import("../components/songer")}

    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
