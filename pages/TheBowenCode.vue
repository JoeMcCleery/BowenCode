<template>
  <div>
    <div class="uk-section uk-section-primary uk-light header">
      <div class="uk-container uk-text-center">
        <h1>
          About The Bowen Code
        </h1>
      </div>
    </div>

    <div class="uk-section uk-light">
      <div class="uk-container">
        <div class="uk-card uk-card-secondary uk-card-body">
          <h2 class="uk-card-title uk-margin-medium-bottom">Bottle Neck Tag</h2>

          <div class="uk-card uk-card-primary uk-margin-auto uk-width-medium">
            <div class="uk-padding-small">
              <a uk-tooltip="BowenCode URL" class="uk-flex uk-flex-center">Bowencode.com.au</a>

              <a uk-tooltip="Hole for bottle neck" class="uk-flex uk-flex-center uk-flex-middle uk-margin uk-height-small uk-width-small uk-margin-auto uk-background-secondary" style="border-radius: 50%;"></a>

              <div class="uk-grid-small uk-grid-match" uk-grid>
                <div class="uk-width-1-3">
                  <a class="uk-height-1-1 uk-flex uk-flex-center uk-flex-middle" uk-tooltip="Barcode">
                    <img :src='Barcode' alt="Barcode" uk-img/>
                  </a>
                </div>

                <div class="uk-width-2-3">
                  <div class="uk-grid-small uk-grid-match" uk-grid>
                    <div>
                      <a class="uk-flex uk-flex-column" uk-tooltip="Wine Score / Price">
                        <span><span uk-icon="star"/><span uk-icon="star" /><span uk-icon="star" /><span uk-icon="star" /><span uk-icon="star" /></span>
                        <span><span uk-icon="tag" /> $XXX.xx</span>
                      </a>
                    </div>

                    <div class="uk-width-1-1">
                      <div class="uk-grid-small uk-flex uk-flex-between" uk-grid>
                        <div class="uk-width-2-3">
                          <a class="uk-flex uk-flex-column" uk-tooltip="Drinking Window">
                            <sup>Window</sup>
                            <span>01/12/20</span>
                          </a>
                        </div>

                        <div class="uk-width-1-3">
                          <a class="uk-flex uk-flex-column" uk-tooltip="Wine Type">
                            <sup>Type</sup>
                            <span>Char</span>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="uk-width-1-1">
                      <div class="uk-grid-collapse uk-grid-match uk-position-relative" uk-grid>
                        <div class="uk-width-1-1">
                          <a class="uk-flex uk-flex-column" uk-tooltip="Wine Details">
                            <sup>Details</sup>
                            RnB Chardonnay 2019
                          </a>
                        </div>

                        <div class="uk-position-bottom-right">
                          <a uk-tooltip="Cut Off Corner When Ready To Drink">
                            <span class="cut-here-line" />
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
</template>

<script>
import Barcode from '@/assets/images/barcode.png'
export default {
  name: 'TheBowenCode',
  data() {
    return {
      Barcode
    }
  }
}
</script>
