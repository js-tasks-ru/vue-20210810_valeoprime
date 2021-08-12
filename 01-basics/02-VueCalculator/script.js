import { createApp } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение
const RootComponent = {
  template: `<div class="row">
        <div class="col">
          <input v-model.number="number1" type="number" />
        </div>

        <div class="col" style="display: flex; flex-direction: column; font-family: emoji">
          <label><input type="radio" v-model="picked" value="sum" /> ➕</label>
          <label><input type="radio" v-model="picked" value="subtract" /> ➖</label>
          <label><input type="radio" v-model="picked" value="multiply" /> ✖</label>
          <label><input type="radio" v-model="picked" value="divide" /> ➗</label>
        </div>

        <div class="col">
          <input   v-model.number="number2" type="number" />
        </div>

        <div class="col">=</div>

        <output class="col">{{result}}</output>
      </div>`,
  data() {
    return {
      number1: 0,
      number2: 0,
      picked: null,
    };
  },
  computed: {
    result() {
      let result = 0;
      switch (this.picked) {
        case 'sum':
          result = this.number1 + this.number2;
          break;
        case 'subtract':
          result = this.number1 - this.number2;
          break;
        case 'multiply':
          result = this.number1 * this.number2;
          break;
        case 'divide':
          result = this.number1 / this.number2;
          break;
      }
      return result;
    },
  },
};
const app = createApp(RootComponent);
app.mount('#app');
