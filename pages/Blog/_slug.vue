<template>
  <div>

    <div class="uk-section uk-light header">
      <div class="uk-container uk-text-center uk-position-relative uk-flex uk-flex-column">
        <h1 class="uk-padding-small">
          {{ article.title }}
        </h1>
        <div>
          <p>
            {{ formattedDate }}
          </p>
          <nuxt-link to="/Blog" title="Back to Blog Home" class="uk-button uk-button-small uk-button-default">
            <span uk-icon="chevron-left"/>
            Back to Blog
          </nuxt-link>
        </div>
      </div>
    </div>

    <div class="uk-section uk-light">
      <div class="uk-container">
        <div class="uk-card uk-card-secondary uk-card-body">
          <h2>{{ article.title }}</h2>
          <div class="blog-post uk-card uk-card-primary uk-card-body">
            <nuxt-content v-if="article.enabled" :document="article" />
            <div v-else>
              <p>Article is currently disabled</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />

  </div>
</template>

<script>
export default {
  name: 'BlogArticle',
  components: {
    Footer: () => import('~/components/Footer')
  },
  async asyncData ({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    return {
      article
    }
  },
  computed: {
    formattedDate() {
      return new Date(this.article.publishDate).toDateString()
    }
  },
  head() {
    return {
      title: 'BowenCode - ' + this.article.title,
      meta: [
        { hid: 'description', name: 'description', content: this.article.description },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: 'BowenCode - ' + this.article.title },
        { hid: 'og:description', property: 'og:description', content: this.article.description },
        // Twitter Card
        { hid: 'twitter:title', name: 'twitter:title', content: 'BowenCode - ' + this.article.title },
        { hid: 'twitter:description', name: 'twitter:description', content: this.article.description }
      ]
    }
  }
}
</script>
