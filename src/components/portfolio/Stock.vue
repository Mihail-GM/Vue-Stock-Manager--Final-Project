<template>
  

    <div class="col-sm-6 mt-6 pt-4" v-show="stock.quantity">
      <div class="card">
        <div class="card-header">{{stock.name}}
         <span>  (price: {{ stock.price }}  |  Quantity: {{ stock.quantity }}) </span>
        </div>
        <div class="card-body">
          <form class="form-inline">
            <div class="form-group mx-sm-3 mb-2">
              <label for="Stock" class="sr-only">{{stock.name}}</label>
              <input
                      type="number"
                      class="form-control" 
                      id="Stock" 
                      placeholder="Quantity"
                      v-model="quantity"
                      :class="{danger: insufficientQuantity}" />
            </div>
            <button
                    type="button"
                    class="btn btn-danger mb-2 " 
                    @click="sellStock"
                    
                    :disabled="insufficientQuantity || quantity <= 0 || Number.isInteger(quantity)"
                    >{{ insufficientQuantity ? 'Not enough' : 'Sell' }}
            </button>
          </form>
        </div>
      </div>
    </div>


  

</template>


<script>
    import {mapActions} from 'vuex';

    export default {
      props: ['stock'],
      data() {
        return {
          quantity: 0
        };
      },
      computed: {
          insufficientQuantity() {
                  return this.quantity > this.stock.quantity;
          }
      },
      methods: {
          ...mapActions({
                    placeSellOrder: 'sellStock'
          }),
          
          resetQuanity() {
            this.quantity = 0;
          },

          sellStock() {
            const order = {
                        stockId: this.stock.id,
                        stockPrice: this.stock.price,
                        quantity: this.quantity
            };
            this.placeSellOrder(order);
            this.resetQuanity();
          }

      },

    }
</script>