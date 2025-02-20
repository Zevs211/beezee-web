import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from './pages/Landing.vue';
import DeterminerPage from './pages/Determiner.vue';
import JobsPage from './pages/Jobs.vue';
import JobDetail from './pages/JobDetail.vue';
import OrderCreate from './pages/order-create/page.vue';
import Authentication from './pages/Authentication.vue';
import ForgotPassword from './pages/ForgotPassword.vue';

const routes = [
  { path: '/', name: 'landing', component: LandingPage },
  { path: '/authentication', name: 'authentication', component: Authentication },
  { path: '/forgot-password', name: 'forgot-password', component: ForgotPassword },
  { path: '/purpose', name: 'determiner', component: DeterminerPage },
  { path: '/jobs', name: 'jobs', component: JobsPage },
  { path: '/job/:id', name: 'job-detail', component: JobDetail },
  { path: '/order/create', name: 'order-create', component: OrderCreate },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
