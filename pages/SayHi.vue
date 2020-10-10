<template>
  <div>

    <div class="uk-section uk-light header">
      <div class="uk-container uk-text-center">
        <h1>
          Say Hi
        </h1>
      </div>
    </div>

    <div class="uk-section uk-light">
      <div class="uk-container">
        <div class="uk-card uk-card-secondary uk-card-body uk-width-large uk-margin-auto">
          <h2 class="uk-card-title uk-margin-medium-bottom">Contact Us</h2>
          <div class="uk-card uk-card-primary uk-card-body uk-text-center">
            <p>
              Send us an email at contact@bowencode.com.au
            </p>
            <a href="mailto:contact@bowencode.com.au?subject=BowenCode%20Website%20Enquiry" title="Send Email to contact@bowencode.com.au" class="uk-button uk-button-primary uk-button-small uk-margin-top">Send email</a>
          </div>
        </div>
      </div>
    </div>

    <Footer />

  </div>
</template>

<script>
export default {
  name: 'SayHi',
  components: {
    Footer: () => import('@/components/Footer')
  }
}
</script>
