/*
 * @Description: 路由
 * @Author: chenju
 * @Date: 2021-05-19 13:36:26
 * @LastEditors: chenju
 * @LastEditTime: 2021-05-26 13:59:25
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import ForegroundLayout from '@/layouts/foreground-layout/index.vue';
import Home from '@/views/home/index.vue';
import About from '@/views/about/index.vue';

import NoFindPage from '@/views/404/index.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/foreground/home'
  },
  {
    path: '/foreground',
    redirect: '/foreground/home',
    component: ForegroundLayout,
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Home
      },
      {
        path: 'about',
        name: 'About',
        component: About
      }
    ]
  },
  {
    path: '/404',
    name: 'NoFindPage',
    component: NoFindPage
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
