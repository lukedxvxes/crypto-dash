import '@mdi/font/css/materialdesignicons.css';
import '@/styles/settings.scss';
import { createVuetify } from 'vuetify';

const myCustomLightTheme = {
  dark: false,
  colors: {
    background: '#f4f5fa',
    surface: '#FFFFFF',
    primary: '#9155fd',
    secondary: '#03DAC6',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
    text: '#434c59',
  },
};

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'custom',
      themes: {
        custom: myCustomLightTheme,
      },
    },
  });
  app.vueApp.use(vuetify);
});
