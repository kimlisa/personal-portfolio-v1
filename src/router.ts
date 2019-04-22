import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import { MenuName } from '@/consts/consts';

Vue.use(Router);

const router = new Router({
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
    {
      path: '*',
      component: () => import(/* webpackChunkName: "404" */ './views/ErrorPageNotFound.vue'),
    },
  ],
});

// removes flashing to top before transitioning caused by scrollTop
router.beforeEach((to, from, next) => {
  // prevent the browser's default behavior (saved scroll position)
  // removes page jumping to top or bottom flicker before route change
  if ('scrollRestoration' in window.history) { window.history.scrollRestoration = 'manual'; }

  // for any back, foward, navigation, always scroll to top
  window.scrollTo(0, 0);

  next();
});

export default router;
