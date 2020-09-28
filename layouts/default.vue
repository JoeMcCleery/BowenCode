<template>
  <div id="page-main" class="uk-section-default uk-preserve-color">
    <Navbar />
    <Nuxt class="page-content" />
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'Default',
  components: {
    Navbar: () => import('@/components/Navbar'),
    Footer: () => import('@/components/Footer')
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

html,
body,
#__nuxt,
#__layout,
#page-main,
.page-content {
  min-height: 100vh;
}

#page-main {
  .page-content {
    height: 100%;
  }
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
