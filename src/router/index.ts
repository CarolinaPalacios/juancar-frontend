import { createRouter, createWebHistory } from 'vue-router'
import {
  CoverageAreas,
  Home,
  Login,
  RequestQuote,
  ScheduleVisit,
  Services,
  TitleReport,
} from '../views/index'

const BASE_URL = import.meta.env.VUE_APP_BASE_URL || '/'

export const router = createRouter({
  history: createWebHistory(BASE_URL),
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
  ],
})
