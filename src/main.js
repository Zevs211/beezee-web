import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createI18n } from 'vue-i18n';
import Datepicker from '@vuepic/vue-datepicker';
import App from './App.vue';
import '@vuepic/vue-datepicker/dist/main.css';
import router from './router';
import './styles/index.scss';

const i18n = createI18n({
  legacy: false,
  fallbackLocale: 'en',
});

const pinia = createPinia();
const app = createApp(App);
app.use(router);
app.use(i18n);
app.component('Datepicker', Datepicker);
app.use(pinia);
app.mount('#app');
