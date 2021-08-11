import { createApp } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение
const RootComponent = {
  template: `<button type="button" @click="count++">{{count}}</button>`,
  data() {
    return { count: 0 };
  },
};
const app = createApp(RootComponent);
app.mount('#app');
