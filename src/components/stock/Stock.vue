<template>


    <div class="col-sm-6 col-md-6 pt-4">
      <div class="card">
        <div class="card-header">{{stock.name}} (price: {{ stock.price }} )</div>
        <div class="card-body">
          <form class="form-inline">
            <div class="form-group mx-sm-3 mb-2">
              <label for="bmwStock" class="sr-only">{{stock.name}} </label>
              <input
                            type="number"
                            class="form-control"
                            placeholder="Quantity"
                            v-model="quantity"
                            :class="{danger: insufficientFunds}"
                    >
            </div>
             <button
                            class="btn btn-success"
                            @click="buyStock"
                            :disabled="insufficientFunds || quantity <= 0"
                    >{{ insufficientFunds ? 'Insufficient Funds' : 'Buy' }}
                    </button>
          </form>
        </div>
      </div>
    </div>



  

</template>


<script>

export default {
  props: ['stock'],
  data() {
    return {
      quantity: 0,
    };
  },
  methods: {
      resetQuanity() {
        this.quantity = 0;
      },
      buyStock(payload) {
        const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: +this.quantity
        };          
        this.$store.commit('buyStock', order);
        this.resetQuanity();
      }

  },

  computed: {
      insufficientFunds() {
         return (this.quantity * this.stock.price) > this.$store.getters.funds;
      }
  }
  
}
</script>

