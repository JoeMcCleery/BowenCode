<template>
  <div id="page-main" class="uk-section-default uk-preserve-color">
    <navbar />
    <Nuxt class="page-content"/>
    <div class="footer uk-section uk-section-primary">
      <div class="uk-container">
        <div class="uk-padding">
          <p>
            *Yes it really is free to use. All we ask is that you acknowledge us as the owners of the IP and you provide a link to www.bowencode.com.au
            A number of commercial organisations have embraced the Bowen Code and provide ancillary products and services for a fee.
          </p>
          <p>
            This work is licensed under the Creative Commons Attribution-ShareAlike 4.0 International License. To view a copy of this license, visit
            https://creativecommons.org/licenses/by-nd/4.0/legalcode
          </p>
        </div>
      </div>
    </div>
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
