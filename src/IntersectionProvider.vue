<script>
const observerMap = new Map();
const rootIds = new Map();
let rootId = 0;

function getRootId(root = null) {
  if (!root) return '0';
  if (rootIds.has(root)) return rootIds.get(root);
  rootId += 1;
  rootIds.set(root, rootId.toString());
  return rootIds.get(root);
}

export function getIdFromOptions(options) {
  return Object.keys(options)
    .filter(Boolean)
    .sort()
    .map(key => `${key}_${key === 'root' ? getRootId(options.root) : options[key]}`)
    .toString();
}

function createObserver(options = {}) {
  const id = getIdFromOptions(options);
  const instance = observerMap.get(id);
  if (instance) return instance;
  const elements = new Map();
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      callback(entry.isIntersecting, entry);
    });
  }, options);
  const newInstance = { id, observer, elements };
  observerMap.set(id, newInstance);
  return newInstance;
}

function observe(element, callback, options) {
  if (!element || !callback) return;
  const { id, observer, elements } = createObserver(options);
  if (!elements.has(element)) elements.set(element, callback);
  observer.observe(element);
  return id;
}

function unobserve(id, element) {
  const { observer, elements } = observerMap.get(id);
  observer.unobserve(element);
  elements.delete(element);
  if (elements.size === 0) {
    observer.disconnect();
    observerMap.delete(id);
  }
}

export default {
  name: 'vue-intersection-provider',
  provide: () => ({ observe, unobserve }),
  render() {
    return this.$slots.default ? this.$slots.default[0] : null;
  }
};
</script>
