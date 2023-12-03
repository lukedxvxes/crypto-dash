import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";

const myCustomLightTheme = {
  dark: false,
  colors: {
    background: "#f4f5fa",
    surface: "#FFFFFF",
    primary: "#9155fd",
    secondary: "#03DAC6",
    "secondary-darken-1": "#018786",
    error: "#B00020",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00",
  },
};

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: "light",
      themes: {
        light: myCustomLightTheme,
      },
    },
  });
  app.vueApp.use(vuetify);
});
