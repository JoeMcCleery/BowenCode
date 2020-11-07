<template>
  <div class="uk-flex uk-flex-center uk-margin">
    <img class="uk-width-auto uk-height-max-medium" src="" :data-src="url" :alt="altText" uk-img/>
  </div>
</template>

<script>
export default {
  name: 'BlogImage',
  props: {
    url: {
      type: String,
      default: '/staticAssets/wine-rack.webp'
    },
    altText: {
      type: String,
      default: 'Blog Image'
    }
  }
}
</script>
