import VueIntersectionObserver from './IntersectionObserver.vue';
import VueIntersectionProvider from './IntersectionProvider.vue';

export { VueIntersectionProvider, VueIntersectionObserver };

export function install(Vue) {
  Vue.component(VueIntersectionProvider.name, VueIntersectionProvider);
  Vue.component(VueIntersectionObserver.name, VueIntersectionObserver);
}
