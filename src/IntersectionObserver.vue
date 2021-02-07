<script>
/* eslint-disable vue/require-default-prop */
export default {
  name: 'vue-intersection-observer',
  inject: ['observe', 'unobserve'],
  render() {
    return this.$slots.default ? this.$slots.default[0] : null;
  },
  props: {
    root: { type: HTMLElement },
    threshold: { type: [Number, Array] },
    rootMargin: { type: String }
  },
  data: () => ({ observerId: null }),
  mounted() {
    const { root, threshold, rootMargin, $el } = this;
    this.observerId = this.observe($el, (inView, entry) => {
      if (!inView) return;
      this.unobserve(this.observerId, $el);
      this.observerId = null;
      this.$emit('in-view', entry);
    }, { root, threshold, rootMargin });
  },
  destroyed() {
    return this.observerId && this.unobserve(this.observerId, this.$el);
  }
};
</script>
