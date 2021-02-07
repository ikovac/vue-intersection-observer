import * as VueIntersectionObserver from '../src';
import App from './App.vue';
import Vue from 'vue';

Vue.use(VueIntersectionObserver);

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  render: h => h(App)
});
