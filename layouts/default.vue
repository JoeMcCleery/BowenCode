<template>
  <div id="page-main" class="uk-section-default uk-preserve-color">
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
