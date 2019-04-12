import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import { MenuName } from '@/consts/consts';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: MenuName.HOME,
      component: Home,
      props: true,
    },
    {
      path: `/${MenuName.ABOUT}`,
      name: MenuName.ABOUT,
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: `/${MenuName.PROJECTS}`,
      name: MenuName.PROJECTS,
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Projects.vue'),
    },
    {
      path: `/${MenuName.CONTACT}`,
      name: MenuName.CONTACT,
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Contact.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // https://router.vuejs.org/guide/advanced/scroll-behavior.html#scroll-behavior
    return { x: 0, y: 0 };
  },
});
