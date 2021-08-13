import { createApp } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

// Требуется создать Vue приложение
const RootComponent = {
  template: `<div>
        <label  v-for="(radio,index) in 5"><input v-model="meetupId" type="radio" :value="index  +1" /> {{ index + 1 }}</label>
                <hr />

        <h3>{{meetupTitle}} </h3>
      </div>`,
  data() {
    return {
      meetupId: null,
      meetupTitle: '',
    };
  },
  watch: {
    async meetupId() {
      let curentMeetup = await fetchMeetupById(this.meetupId);
      this.meetupTitle = curentMeetup.title;
    },
  },
};
const app = createApp(RootComponent);
app.mount('#app');
