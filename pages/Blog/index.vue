<template>
  <div>

    <div class="uk-section uk-light header">
      <div class="uk-container uk-text-center">
        <h1 class="uk-padding-small">
          Blog
        </h1>
      </div>
    </div>

    <div class="uk-section uk-light">
      <div class="uk-container">
        <div class="uk-card uk-card-secondary uk-card-body">
          <h2>{{page.title}}</h2>
          <div class="uk-card uk-card-primary uk-card-body">
            <nuxt-content :document="page" />
          </div>

          <div v-if="articles.length" class="uk-card uk-card-primary uk-card-body uk-margin-large-top">
            <h3>Articles</h3>
            <ul v-for="article in articles" :key="article.slug" class="uk-list uk-list-bullet">
              <li>
                <nuxt-link :to="'Blog/' + article.slug" class="uk-link-text"><b>{{article.title}}</b><br/><small>{{prettyDate(article.createdAt)}}</small></nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <Footer />

  </div>
</template>

<script>
export default {
  name: 'Blog',
  components: {
    Footer: () => import('~/components/Footer')
  },
  async asyncData ({ $content }) {
    const page = await $content('home').fetch()
    const articles = await $content('articles').sortBy('createdAt').fetch()

    return {
      page,
      articles
    }
  },
  methods: {
    prettyDate(date) {
      return new Date(date).toDateString()
    }
  }
}
</script>
