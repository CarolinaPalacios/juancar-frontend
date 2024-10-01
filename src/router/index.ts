import { createRouter, createWebHistory } from 'vue-router';
import {
  CoverageAreas,
  Home,
  Login,
  RequestQuote,
  ScheduleVisit,
  Services,
  TitleReport,
} from '@/views/index';
import {
  DashboardAppointments,
  DashboardAvailabilities,
  DashboardHome,
  DashboardPrices,
  DashboardLayout,
} from '@/views/dashboard';
import { useAuthStore } from '@/store/auth';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      beforeEnter: (_to, _from, next) => {
        if (localStorage.getItem('token')) {
          next({ name: 'homeDashboard' });
        } else {
          next();
        }
      },
    },
    {
      path: '/agendar-visita',
      name: 'scheduleVisit',
      component: ScheduleVisit,
    },
    {
      path: '/servicios',
      name: 'services',
      component: Services,
    },
    {
      path: '/areas-de-cobertura',
      name: 'coverageAreas',
      component: CoverageAreas,
    },
    {
      path: '/cotizar',
      name: 'requestQuote',
      component: RequestQuote,
    },
    {
      path: '/informe-dominio',
      name: 'titleReport',
      component: TitleReport,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardLayout,
      meta: { requiresAuth: true, requiresNoHeader: true },
      children: [
        {
          path: '',
          redirect: { name: 'homeDashboard' },
        },
        {
          path: 'inicio',
          name: 'homeDashboard',
          component: DashboardHome,
          meta: { requiresAuth: true },
        },
        {
          path: 'visitas',
          name: 'appointmentsDashboard',
          component: DashboardAppointments,
          meta: { requiresAuth: true },
        },
        {
          path: 'disponibilidad',
          name: 'availabilitiesDashboard',
          component: DashboardAvailabilities,
          meta: { requiresAuth: true },
        },
        {
          path: 'precios',
          name: 'pricesDashboard',
          component: DashboardPrices,
          meta: { requiresAuth: true },
        },
      ],
    },
  ],
});

router.beforeEach((to, _from, next) => {
  const authStore = useAuthStore();
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!authStore.token) {
      next({ name: 'login' });
    } else {
      next();
    }
  } else {
    next();
  }
});
