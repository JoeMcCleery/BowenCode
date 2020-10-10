<template>
  <div>

    <div class="uk-section uk-light header">
      <div class="uk-container uk-text-center">
        <h1>
          Resources
        </h1>
      </div>
    </div>

    <div class="uk-section uk-light">
      <div class="uk-container">
        <div class="uk-card uk-card-secondary uk-card-body">
          <h2 class="uk-card-title uk-margin-medium-bottom">Licensing And Use Of The Bowen Code</h2>
          <div class="uk-flex uk-flex-center uk-child-width-1-1 uk-child-width-1-2@m uk-child-width-1-3@l uk-grid-match"
               uk-grid>
            <div>
              <div class="uk-card uk-card-primary uk-card-body">
                <h3 class="uk-card-title">
                  <span>You are free to:</span>
                </h3>
                <ul class="uk-list uk-list-divider">
                  <li>
                    <p>
                      <b>Share</b> — copy and redistribute the material in any medium or format.
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>Adapt</b> — remix, transform, and build upon the material
                      for any purpose, even commercially.
                    </p>
                  </li>
                  <li>
                    <p>
                      The licensor cannot revoke these freedoms as long as you follow
                      the license terms.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div class="uk-card uk-card-primary uk-card-body">
                <h3 class="uk-card-title"><span>Under the following terms:</span></h3>

                <ul class="uk-list uk-list-divider">
                  <li>
                    <p>
                      <b>Attribution</b> — You must give appropriate credit, provide a link to the license, and indicate
                      if changes were made. You may do so in any reasonable manner, but not in any way that suggests the
                      licensor endorses you or your use.
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>ShareAlike</b> — If you remix, transform, or build upon the material, you must distribute your
                      contributions under the same license as the original.
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>No additional restrictions</b> — You may not apply legal terms or technological measures that
                      legally restrict others from doing anything the license permits.
                    </p>
                  </li>
                </ul>
              </div>
            </div>


            <div>
              <div class="uk-card uk-card-primary uk-card-body">
                <h3 class="uk-card-title"><span>Notices:</span></h3>

                <ul class="uk-list uk-list-divider">
                  <li>
                    <p>You do not have to comply with the license for elements of the
                      material in the public domain or where your use is permitted by an applicable <span>
                  <a href="https://creativecommons.org/licenses/by-nd/4.0/#"
                     target="_blank"
                     title="creative commons - exception or limitation" class="uk-link-text">exception or limitation</a></span>.
                    </p>
                  </li>
                  <li>
                    <p>No warranties are given. The license may not give you all of the
                      permissions necessary for your intended use. For example, other rights such as <span><a
                        href="https://creativecommons.org/licenses/by-nd/4.0/#"
                        target="_blank" title="creative commons - publicity, privacy, or moral rights"
                        class="uk-link-text">publicity, privacy, or moral rights</a></span>
                      may limit how you use the material.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="uk-card uk-card-secondary uk-card-body uk-margin-large-top">
          <h2 class="uk-card-title uk-margin-medium-bottom">Documents</h2>
          <div class="uk-card uk-card-primary uk-card-body">
            <p>
              Bowen Code Wine Rack Construction Details -
              <a
                href="https://cdn.shopify.com/s/files/1/2574/1848/files/Wine_Rack_Instructions_20171224_Final_V1.pdf"
                target="_blank" title="Link to Bowen Code Wine Rack Construction Details" class="uk-link-text">
                PDF Download
              </a>
            </p>

          </div>
        </div>

      </div>
    </div>

    <Footer />

  </div>
</template>

<script>
export default {
  name: 'Resources',
  components: {
    Footer: () => import('@/components/Footer')
  }
}
</script>
