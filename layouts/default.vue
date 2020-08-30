<template>
  <div class="uk-section-default uk-preserve-color">
    <navbar />
    <Nuxt />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'Default',
  components: {
    Navbar: Navbar
  }
}
</script>

<style lang="scss">
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.header {
  height: 300px;

  > div {
    height: 100%;
    display: flex;
    place-content: center;
    place-items: center;
  }
}
</style>
