<template>
    <div uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky uk-box-shadow-small; top: 330;">

      <nav class="uk-navbar-container">
        <div class="uk-container uk-container-expand">

          <div class="uk-hidden@m uk-light" uk-navbar>
            <ul class="uk-navbar-nav uk-navbar-left">
              <a class="uk-navbar-toggle" href="" uk-toggle="target: #offcanvas;"><span uk-navbar-toggle-icon/><span class="uk-margin-small-left">Menu</span></a>
            </ul>

            <div id="offcanvas" uk-offcanvas="overlay: true;">
              <div class="uk-offcanvas-bar uk-flex uk-flex-column">
                <ul class="uk-nav uk-nav-default uk-nav-center uk-margin-auto-vertical">
                  <nuxt-link to="/" class="uk-logo">The Bowen Code</nuxt-link>

                  <li :class="{'uk-active': $nuxt.$route.name === 'WhoIsRobertBowen'}">
                    <nuxt-link to="/WhoIsRobertBowen">Who is Robert Bowen?</nuxt-link>
                  </li>
                  <li :class="{'uk-active': $nuxt.$route.name === 'TheBowenCode'}">
                    <nuxt-link to="/TheBowenCode">The Bowen Code</nuxt-link>
                  </li>
                  <li :class="{'uk-active': $nuxt.$route.name === 'Resources'}">
                    <nuxt-link to="/Resources">Resources</nuxt-link>
                  </li>
                  <li :class="{'uk-active': $nuxt.$route.name === 'SayHi'}">
                    <nuxt-link to="/SayHi">Say Hi</nuxt-link>
                  </li>
                  <li :class="{'uk-active': $nuxt.$route.name === 'Blog'}">
                    <nuxt-link to="/Blog">Blog</nuxt-link>
                  </li>

                  <div class="uk-position-bottom uk-margin">
                    <div class="uk-grid-small uk-flex uk-flex-row uk-flex uk-flex-center" uk-grid>
                      <div>
                        <a href="https://www.facebook.com/CellarManagement/" target="_blank" title="facebook" class="uk-icon-link">
                          <span class="uk-icon" uk-icon="icon: facebook"></span>
                        </a>
                      </div>
                      <div>
                        <a href="https://www.youtube.com/channel/UCHp-AubW8mN0Z5C59nA98sQ/videos?disable_polymer=1" target="_blank" title="youtube" class="uk-icon-link">
                          <span class="uk-icon" uk-icon="icon: youtube"></span>
                        </a>
                      </div>
                    </div>
                  </div>

                </ul>
              </div>
            </div>
          </div>

          <div class="uk-visible@m uk-light" uk-navbar>
            <ul class="uk-navbar-nav uk-navbar-center">

              <nuxt-link to="/" class="uk-navbar-item uk-logo">The Bowen Code</nuxt-link>

              <li :class="{'uk-active': $nuxt.$route.name === 'WhoIsRobertBowen'}">
                <nuxt-link to="/WhoIsRobertBowen">Who is Robert Bowen?</nuxt-link>
              </li>
              <li :class="{'uk-active': $nuxt.$route.name === 'TheBowenCode'}">
                <nuxt-link to="/TheBowenCode">The Bowen Code</nuxt-link>
              </li>
              <li :class="{'uk-active': $nuxt.$route.name === 'Resources'}">
                <nuxt-link to="/Resources">Resources</nuxt-link>
              </li>
              <li :class="{'uk-active': $nuxt.$route.name === 'SayHi'}">
                <nuxt-link to="/SayHi">Say Hi</nuxt-link>
              </li>
              <li :class="{'uk-active': $nuxt.$route.name === 'Blog'}">
                <nuxt-link to="/Blog">Blog</nuxt-link>
              </li>

              <div class="uk-navbar-item">
                <div class="uk-grid-small uk-flex uk-flex-row" uk-grid>
                  <div>
                    <a href="https://www.facebook.com/CellarManagement/" target="_blank" title="facebook" class="uk-icon-link">
                      <span class="uk-icon" uk-icon="icon: facebook"></span>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.youtube.com/channel/UCHp-AubW8mN0Z5C59nA98sQ/videos?disable_polymer=1" target="_blank" title="youtube" class="uk-icon-link">
                      <span class="uk-icon" uk-icon="icon: youtube"></span>
                    </a>
                  </div>
                </div>
              </div>

            </ul>
          </div>
        </div>
      </nav>
    </div>
</template>

<script>
export default {
  name: 'Navbar',
  mounted() {
    console.log(this.$nuxt.$route.name)
  }
}
</script>
