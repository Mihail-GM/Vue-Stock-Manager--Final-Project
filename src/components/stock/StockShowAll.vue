<template>
  <div class="row">

    <div class="col-sm-6 mt-3">
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
                      v-model="bmwQuantity" />
            </div>
            <button
                    type="button"
                    class="btn btn-primary mb-2 " 
                    @click="buyStock({quantity: bmwQuantity, stockType: 'Bmw'} )">Buy
            </button>
          </form>
        </div>
      </div>
    </div>

    <div class="col-sm-6 mt-3">
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
                      v-model="googleQuantity" />
            </div>
            <button
                    type="button"
                    class="btn btn-primary mb-2 " 
                    @click="buyStock({quantity: googleQuantity, stockType: 'Google'} )">Buy
            </button>
          </form>
        </div>
      </div>
    </div>

    <div class="col-sm-6 mt-3">
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
                      v-model="appleQuantity" />
            </div>
            <button
                    type="button"
                    class="btn btn-primary mb-2 " 
                    @click="buyStock({quantity: appleQuantity, stockType: 'Apple'} )">Buy
            </button>
          </form>
        </div>
      </div>
    </div>

    <div class="col-sm-6 mt-3">
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
                      v-model="twitterQuantity" />
            </div>
            <button
                    type="button"
                    class="btn btn-primary mb-2 " 
                    @click="buyStock({quantity: twitterQuantity, stockType: 'Twitter'} )">Buy
            </button>
          </form>
        </div>
      </div>
    </div>

      <p> {{ twitterQuantity }} </p>
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
      buyStock(payload) {
        this.$store.commit('buyStock', payload);
        this.resetQuanity();
      }

  },

  computed: {
    showBmw() {
        return this.$store.getters.showBmwPrice;
    },
    showGoogle() {
        return this.$store.getters.showGooglePrice;
    },
    showApple() {
        return this.$store.getters.showApplePrice;
    },
    showTwitter() {
        return this.$store.getters.showTwitterrice;
    }
  }
}
</script>

