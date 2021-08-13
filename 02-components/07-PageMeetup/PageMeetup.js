import { defineComponent } from './vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import MeetupView from '../06-MeetupView/MeetupView.js';
import { fetchMeetupById } from './meetupService.js';
// import { mount } from '@vue/test-utils';

export default defineComponent({
  name: 'PageMeetup',

  components: {
    UiAlert,
    UiContainer,
    MeetupView,
  },
  props: {
    meetupId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      loading: false,
      error: null,
      curentMeetup: null,
    };
  },
  watch: {
    async meetupId() {
      this.fetchMeetup();
    },
  },
  mounted() {
    this.fetchMeetup();
  },
  methods: {
    async fetchMeetup() {
      this.curentMeetup = null;
      this.error = null;
      this.loading = true;
      try {
        this.curentMeetup = await fetchMeetupById(this.meetupId);
      } catch (e) {
        this.error = e.message;
        this.loading = false;
      }
    },
  },

  template: `
    <div class="page-meetup">
      <meetup-view v-if="curentMeetup" :meetup="curentMeetup"></meetup-view>

      <ui-container v-else-if="loading">
        <ui-alert>Загрузка...</ui-alert>
      </ui-container>

      <ui-container v-else-if="error">
        <ui-alert>{{ error }}</ui-alert>
      </ui-container>
    </div>`,
});
