<template>
  <div>
    <div class="page">
      <h1>Page title</h1>
      <p>Page text</p>
    </div>
    <vue-intersection-provider>
      <vue-intersection-observer @in-view="handleInView" :threshold="0.4">
        <img
          :src="imageSrc"
          alt="placeholder"
          width="800"
          height="600">
      </vue-intersection-observer>
    </vue-intersection-provider>
  </div>
</template>

<script>
const PLACEHOLDER_URL = 'https://via.placeholder.com/800x600.png';
const ORIGINAL_IMAGE_URL = 'https://images.wallpaperscraft.com/image/sea_coast_rocks_underwater_world_vegetation_fish_53966_800x600.jpg';

export default {
  name: 'app',
  data: () => ({ imageSrc: PLACEHOLDER_URL }),
  methods: {
    handleInView() {
      this.imageSrc = ORIGINAL_IMAGE_URL;
    }
  }
};
</script>

<style lang="css" scoped>
.page {
  height: 100vh;
}
</style>
