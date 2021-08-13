import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupCover',
  props: {
    title: {
      required: false,
    },
    image: {
      required: false,
    },
  },
  computed: {
    bgcImage() {
      return this.image ? `--bg-url: url('${this.image}')` : '';
    },
  },
  template: `
    <div class="meetup-cover" :style="bgcImage">
        <h1 class="meetup-cover__title">{{ title }}</h1>
    </div>`,
});
