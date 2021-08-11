import { createApp } from './vendor/vue.esm-browser.js';

// From https://jsonplaceholder.typicode.com/comments
const emails = [
  'Eliseo@gardner.biz',
  'Jayne_Kuhic@sydney.com',
  'Nikita@garfield.biz',
  'Lew@alysha.tv',
  'Hayden@althea.biz',
  'Presley.Mueller@myrl.com',
  'Dallas@ole.me',
  'Mallory_Kunze@marie.org',
  'Meghan_Littel@rene.us',
  'Carmen_Keeling@caroline.name',
  'Veronica_Goodwin@timmothy.net',
  'Oswald.Vandervort@leanne.org',
  'Kariane@jadyn.tv',
  'Nathan@solon.io',
  'Maynard.Hodkiewicz@roberta.com',
  'Christine@ayana.info',
  'Preston_Hudson@blaise.tv',
  'Vincenza_Klocko@albertha.name',
  'Madelynn.Gorczany@darion.biz',
  'Mariana_Orn@preston.org',
  'Noemie@marques.me',
  'Khalil@emile.co.uk',
  'Sophia@arianna.co.uk',
  'Jeffery@juwan.us',
  'Isaias_Kuhic@jarrett.net',
];

// Создайте Vue приложение
const RootComponent = {
  template: `<div class="container">
        <div class="form-group">
          <input v-model="query" type="search" />
        </div>
        <ul>
          <li v-for="email in filteredArray" v-bind:class="[email.matches ? 'marked' : '']">{{email.email}}</li>
        </ul>
      </div>`,
  data() {
    return {
      query: null,
    };
  },
  computed: {
    filteredArray() {
      let filteredArray = emails.map((email) => {
        return email.indexOf(this.query) >= 0 ? { email, matches: true } : { email, matches: false };
      });
      return filteredArray;
    },
  },
};
const app = createApp(RootComponent);
app.mount('#app');

// Требуется создать Vue приложение
