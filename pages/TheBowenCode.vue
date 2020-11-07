<template>
  <div>

    <div class="uk-section uk-light header">
      <div class="uk-container uk-text-center">
        <h1 class="uk-padding-small">
          The Bowen Code
        </h1>
      </div>
    </div>

    <div id="content" class="uk-section uk-light">
      <div class="uk-container">
        <div class="uk-card uk-card-secondary uk-card-body">
          <h2 class="uk-card-title uk-margin-medium-bottom">
            Wine Rack Brackets
          </h2>

          <div class="uk-card uk-card-primary uk-margin-auto uk-card-body">
            <p>
              The Bowen Code Wine Rack is a cost effect robust minimalist racking system that holds approx 8 doz bottles
              of wine.
            </p>
            <p>
              The key stainless steel components can be sent out within a standard carton of wine, with the mesh being
              sourced by you locally. Assembly undertaken by the average wine drinker using an Allen key (think Ikea).
              The final result is the Bowen Code wine racks.
            </p>
            <a href="https://australianliquoronline.com.au/products/wine-rack-bowen-code-wine-rack-brackets"
               title="Purchase Bowen Code Wine Rack Brackets" target="_blank" class="uk-button uk-button-primary uk-width-1-1 uk-width-auto@s uk-margin-top">
              Buy now
            </a>
          </div>
        </div>

        <div class="uk-card uk-card-secondary uk-card-body uk-margin-large-top">
          <h2 class="uk-card-title uk-margin-medium-bottom">
            Bottle Neck Tag
          </h2>

          <div class="uk-grid-match" uk-grid>
            <div class="uk-width-1-1 uk-width-expand@m">
              <div class="uk-card uk-card-primary uk-card-body">
                <p>
                  The bottle neck tags are made using reusable PVC. Blank on the reverse side and printed on the front with
                  standard Bowen Code attribute boxes you can hand write in if you wish.
                </p>
                <p>
                  The system is designed to be used with Avery address labels 63.5mm x 46.6mm 18 labels per sheet.
                </p>
                <a href="https://australianliquoronline.com.au/products/bowen-code-bottle-neck-tags"
                   title="Purchase Bowen Code Bottle Neck Tags" target="_blank" class="uk-button uk-button-primary uk-width-1-1 uk-width-auto@s uk-margin-top">
                  Buy now
                </a>
              </div>
            </div>

            <div class="uk-flex uk-width-1-1 uk-width-auto@m">
              <div class="uk-card uk-card-primary uk-margin-auto uk-width-medium">
                <div class="uk-padding-small">
                  <a uk-tooltip="BowenCode URL" class="uk-flex uk-flex-center no-select">Bowencode.com.au</a>

                  <a uk-tooltip="Hole for bottle neck"
                     class="hole uk-flex uk-flex-center uk-flex-middle uk-margin uk-height-small uk-width-small uk-margin-auto uk-background-secondary no-select"
                     style="border-radius: 50%;"></a>

                  <div class="uk-grid-small uk-grid-match" uk-grid>
                    <div class="uk-width-1-3">
                      <a class="uk-height-1-1 uk-flex uk-flex-center uk-flex-middle no-select" uk-tooltip="Barcode">
                        <img :src='Barcode' alt="Barcode" uk-img/>
                      </a>
                    </div>

                    <div class="uk-width-2-3">
                      <div class="uk-grid-small uk-grid-match" uk-grid>
                        <div>
                          <a class="uk-flex uk-flex-column no-select" uk-tooltip="Wine Score / Price">
                        <span><span uk-icon="star"/><span uk-icon="star"/><span uk-icon="star"/><span
                          uk-icon="star"/><span uk-icon="star"/></span>
                            <span><span uk-icon="tag"/> $XXX.xx</span>
                          </a>
                        </div>

                        <div class="uk-width-1-1">
                          <div class="uk-grid-small uk-flex uk-flex-between" uk-grid>
                            <div class="uk-width-2-3">
                              <a class="uk-flex uk-flex-column no-select" uk-tooltip="Drinking Window">
                                <sup>Window</sup>
                                <span>01/12/20</span>
                              </a>
                            </div>

                            <div class="uk-width-1-3 wine-type-colour"
                                 style="position: relative; top: -12px; height: 38px;">
                              <a class="uk-flex uk-flex-column no-select" uk-tooltip="Wine Type / Color">
                                <span style="position: relative; top: 7px;">Char</span>
                              </a>
                            </div>
                          </div>
                        </div>

                        <div class="uk-width-1-1">
                          <div class="uk-grid-collapse uk-grid-match uk-position-relative" uk-grid>
                            <div class="uk-width-1-1">
                              <a class="uk-flex uk-flex-column no-select" uk-tooltip="Wine Details">
                                <sup>Details</sup>
                                RnB Chardonnay 2019
                              </a>
                            </div>

                            <div class="uk-position-bottom-right">
                              <a class="no-select" uk-tooltip="Cut Off Corner When Ready To Drink">
                                <span class="cut-here-line"/>
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
          </div>
        </div>
      </div>
    </div>

    <Footer/>

  </div>
</template>

<script>
import Barcode from '@/assets/images/barcode.png'

export default {
  name: 'AboutTheBowenCode',
  components: {
    Footer: () => import('@/components/Footer')
  },
  data() {
    return {
      Barcode
    }
  }
}
</script>
