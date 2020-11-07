<template>
  <div id="page-main" class="uk-section-default uk-preserve-color" uk-parallax="bgy: 1%">
    <Navbar />
    <Nuxt class="page-content" />
  </div>
</template>

<script>
export default {
  name: 'Default',
  components: {
    Navbar: () => import('@/components/Navbar')
  }
}
</script>
