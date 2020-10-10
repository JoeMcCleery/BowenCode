<template>
  <div>

    <div class="uk-section uk-light header">
      <div class="uk-container uk-text-center">
        <h1>
          Who Is Robert Bowen
        </h1>
      </div>
    </div>

    <div class="uk-section uk-section-default uk-light">
      <div class="uk-container">
        <div class="uk-card uk-card-secondary uk-card-body">
          <h2 class="uk-card-title uk-margin-medium-bottom">About Rob</h2>
          <p class="uk-card uk-card-primary uk-card-body">
            Rob bowen is one of the best-known and celebrated winemakers in Western Australia. Rob has over 45 years'
            experience with several of WA's leading wineries, including Houghton. In 2009 Rob commenced producing his own
            branded wines. He joined forces with a team of viticulturists (led by David Radomilijac) who collectively
            furnish the project with an extensive range of knowledge and expertise. Since this time the group have
            produced some outstanding premium wines with a strong sense of place, all grapes hand-picked from the best
            available vineyards in the Margaret River and Pemberton regions. Two core ranges of wines are produced: Robert
            Bowen (from Margaret River and Pemberton) and Pemberley (from the Pemberley Farms Vineyard owned by David).
          </p>
        </div>
      </div>
    </div>

    <Footer />

  </div>
</template>

<script>
  export default {
    name: 'WhoIsRobertBowen',
    components: {
      Footer: () => import('@/components/Footer')
    }
  }
</script>
