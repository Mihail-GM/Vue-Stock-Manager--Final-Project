<template>
  <div class="row">

    <div class="col-sm-6 mt-3" v-show="showBmwQuantity">
      <div class="card">
        <div class="card-header">BMW (price: {{ showBmw }} )</div>
        <div class="card-body">
          <form class="form-inline">
            <div class="form-group mx-sm-3 mb-2">
              <label for="bmwStock" class="sr-only">Bmw</label>
              <input
                      type="text"
                      class="form-control" 
                      id="bmwStock" 
                      placeholder="Quantity"
                      v-model="showBmwQuantity" />
            </div>
            <button
                    type="button"
                    class="btn btn-danger mb-2 " 
                    @click="sellStock('Bmw')">Sell
            </button>
          </form>
        </div>
      </div>
    </div>

    <div class="col-sm-6 mt-3" v-show="showGoogleQuantity">
      <div class="card">
        <div class="card-header">Google (price: {{ showGoogle }})</div>
        <div class="card-body">
          <form class="form-inline">
            <div class="form-group mx-sm-3 mb-2">
              <label for="googleStock" class="sr-only">Google</label>
              <input
                      type="text"
                      class="form-control" 
                      id="googleStock" 
                      placeholder="Quantity"
                      v-model="showGoogleQuantity" />
            </div>
            <button
                    type="button"
                    class="btn btn-danger mb-2 " 
                   @click="sellStock('Google')">Sell
            </button>
          </form>
        </div>
      </div>
    </div>

    <div class="col-sm-6 mt-3" v-show="showAppleQuantity">
      <div class="card">
        <div class="card-header">Apple (price: {{ showApple }})</div>
        <div class="card-body">
          <form class="form-inline">
            <div class="form-group mx-sm-3 mb-2">
              <label for="appleStock" class="sr-only">Apple</label>
              <input
                      type="text"
                      class="form-control" 
                      id="appleStock" 
                      placeholder="Quantity"
                      v-model="showAppleQuantity" />
            </div>
            <button
                    type="button"
                    class="btn btn-danger mb-2 " 
                   @click="sellStock('Apple')">Sell
            </button>
          </form>
        </div>
      </div>
    </div>

    <div class="col-sm-6 mt-3" v-show="showTwitterQuantity">
      <div class="card">
        <div class="card-header">Twitter (price: {{ showTwitter }})</div>
        <div class="card-body">
          <form class="form-inline">
            <div class="form-group mx-sm-3 mb-2">
              <label for="bmwStock" class="sr-only">Twitter</label>
              <input
                      type="text"
                      class="form-control" 
                      id="bmwStock" 
                      placeholder="Quantity"
                      v-model="showTwitterQuantity" />
            </div>
            <button
                    type="button"
                    class="btn btn-danger mb-2 " 
                    @click="sellStock('Twitter')">Sell
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  

</template>


<script>

import { mapMutations } from 'vuex';

export default {
  data() {
    return {
      bmwQuantity: 0,
      googleQuantity: 0,
      appleQuantity: 0,
      twitterQuantity: 0,
    };
  },
  methods: {
      resetQuanity() {
        this.bmwQuantity = 0;
        this.googleQuantity = 0;
        this.appleQuantity = 0;
        this.twitterQuantity = 0;
      },
      sellStock(payload) {
        this.$store.commit('sellStock', payload);
      
      }

  },

  computed: {
    showBmw() {
        return this.$store.getters.showBmwPrice;
    },
    showBmwQuantity() {
        return this.$store.getters.showPortfolioBmwQuantity;
    },

    showGoogle() {
        return this.$store.getters.showGooglePrice;
    },
    showGoogleQuantity() {
        return this.$store.getters.showPortfolioGoogleQuantity;
    },
    
    showApple() {
        return this.$store.getters.showApplePrice;
    },
    showAppleQuantity() {
        return this.$store.getters.showPortfolioAppleQuantity;
    },
    

    showTwitter() {
        return this.$store.getters.showTwitterrice;
    },
    showTwitterQuantity() {
        return this.$store.getters.showPortfolioTwitterQuantity;
    },
    
  }
}
</script>