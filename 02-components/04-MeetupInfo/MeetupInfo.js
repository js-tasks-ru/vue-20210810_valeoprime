import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupInfo',
  props: {
    organizer: {
      required: true,
    },
    place: {
      required: true,
    },
    date: {
      required: true,
    },
  },
  computed: {
    locale() {
      return navigator.language || navigator.userLanguage;
    },
    localeDate() {
      return new Date(this.date).toLocaleString(this.locale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    },
    isoDate() {
      return new Date(this.date).toISOString().split('T')[0];
    },
  },
  template: `
    <ul class="meetup-info">
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-user.svg" />
        {{ organizer }}
      </li>
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-map.svg" />
       {{ place }}
      </li>
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-cal-lg.svg" />
        <time :datetime="isoDate">{{ localeDate }}</time>
      </li>
    </ul>`,
});
