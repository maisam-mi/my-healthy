import { createRouter, createWebHistory } from 'vue-router';
import myHealthyStore from '@/stores/defaultStore.js';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/account',
      name: 'Account',
      component: () => import('../views/AccountView.vue'),
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/signup',
      name: 'Sign up',
      component: () => import('../views/SignupView.vue'),
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/LoginView.vue'),
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  const store = myHealthyStore();
  if (!store.isAuthenticated) {
    if (to.name !== 'Login' && to.name !== 'Sign up') {
      // Wenn der Benutzer nicht authentifiziert ist und die Seite nicht 'Login' oder 'Singup' ist,
      // leite ihn zur 'Login'-Seite weiter
      next({ name: 'Login' });
    } else {
      // Wenn der Benutzer nicht authentifiziert ist und die Seite 'Login' oder 'Singup' ist,
      // erlaube die Navigation
      next();
    }
  } else {
    // Wenn der Benutzer authentifiziert ist, erlaube die Navigation zu jeder Seite
    next();
  }
});

export default router;
