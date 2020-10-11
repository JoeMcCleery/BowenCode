<template>
  <div>

    <div class="uk-section uk-light header">
      <div class="uk-container uk-text-center">
        <h1 class="uk-padding-small">
          Contact Us
        </h1>
      </div>
    </div>

    <div class="uk-section uk-light">
      <div class="uk-container">
        <div class="uk-card uk-card-secondary uk-card-body uk-width-large uk-margin-auto">
          <h2 class="uk-card-title uk-margin-medium-bottom">Say Hello</h2>
          <div class="uk-card uk-card-primary uk-card-body uk-text-center">
            <p>
              Get in contact with us at contact@bowencode.com.au
            </p>
            <a href="mailto:contact@bowencode.com.au?subject=BowenCode%20Website" title="Send Email to contact@bowencode.com.au" class="uk-button uk-button-primary uk-button-small uk-margin-top">Compose email</a>
          </div>
        </div>
      </div>
    </div>

    <Footer />

  </div>
</template>

<script>
export default {
  name: 'ContactUs',
  components: {
    Footer: () => import('@/components/Footer')
  }
}
</script>
