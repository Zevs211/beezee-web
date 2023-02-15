import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import App from './App.vue';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import router from './router';
import './styles/index.scss';

const i18n = createI18n({
  legacy: false,
  fallbackLocale: 'en',
});

const app = createApp(App);
app.use(router);
app.use(i18n);
app.component('Datepicker', Datepicker);
app.mount('#app');
