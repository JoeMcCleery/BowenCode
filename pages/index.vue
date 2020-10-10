<template>
  <div>

    <div class="uk-section uk-light header">
      <div class="uk-container uk-text-center">
        <h1>
          Robert Bowen's<br/>
          <span>
            Free to use*<br/>
            Cellar Management System
          </span>
        </h1>
      </div>
    </div>

    <div class="uk-section uk-light">
      <div class="uk-container">
        <div class="uk-card uk-card-secondary uk-card-body">
          <h2 class="uk-card-title uk-margin-medium-bottom">At A Glance</h2>
          <div class="uk-flex uk-flex-center uk-child-width-1-1 uk-child-width-1-2@m uk-child-width-1-3@l uk-grid-match" uk-grid>
            <div>
              <div class="uk-card uk-card-primary uk-card-body">
                <h4 class="uk-card-title">
                  Simplified Wine Management
                </h4>
                <p>
                  Celebrated Wine Maker Robert Bowen, has developed a simplified approach to wine collection and management.
                </p>
                <p>
                  With the Bowen Code, Robert Bowen has managed to distill 45 years of wine making and collecting
                  knowledge in a system that anyone can understand and use.
                </p>
                <p>
                  Robert Bowen's proven rating system presented as carefully considered combination of colour and
                  alphanumeric tags allows you to gain overview of the status of your wine collection at a single
                  glance.
                </p>
                <p>
                  Robert has made the Bowen Code freely* available to the wine collecting public as his contribution to
                  supporting the education and enjoyment of wine.
                </p>
                <nuxt-link to="/TheBowenCode" class="uk-button uk-button-primary uk-width-expand uk-margin-top">Find Out More
                </nuxt-link>
              </div>
            </div>

            <div>
              <div class="uk-card uk-card-primary uk-card-body">
                <h4 class="uk-card-title">
                  Starting A Cellar
                </h4>
                <p>
                  Shifting from being simply a consumer of wine to a collector can be very rewarding. The challenge is
                  how to get started.
                </p>
                <p>
                  Within this site Rob provides access to a range or industry backed resources and people that can start
                  you on the journey of wine collection.
                </p>
                <p>
                  From cost effective racking, online education services and of course the Bowen Code approach to wine
                  collecting.
                </p>
                <p>
                  There is one golden rule when starting a cellar. "Buy more wine than you drink"
                </p>
              </div>
            </div>

            <div>
              <div class="uk-card uk-card-primary uk-card-body">
                <h4 class="uk-card-title">
                  The Wine Making Process
                </h4>
                <p>
                  Rob works collaboratively with a number of wineries across the key wine regions of Western Australia
                  including, Margaret River, Mt Baker Pemberton and the Swan Valley.
                </p>
                <p>
                  Each season presents it pleasant surprises and challenges. Follow Rob here and on social media to keep
                  abreast of progress.
                </p>
                <div class="uk-margin">
                  <div class="uk-grid-small uk-flex uk-flex-row" uk-grid>
                    <div>
                      <a href="https://www.facebook.com/CellarManagement/" target="_blank" title="facebook"
                         class="uk-icon-link">
                        <span class="uk-icon" uk-icon="icon: facebook"></span>
                      </a>
                    </div>
                    <div>
                      <a href="https://www.youtube.com/channel/UCHp-AubW8mN0Z5C59nA98sQ/videos?disable_polymer=1"
                         target="_blank" title="youtube" class="uk-icon-link">
                        <span class="uk-icon" uk-icon="icon: youtube"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
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
    name: 'Home',
    components: {
      Footer: () => import('@/components/Footer')
    }
  }
</script>

<style lang="scss" scoped>
h1 {
  line-height: 0.7;

  span {
    font-size: 0.5em;
  }
}
</style>
