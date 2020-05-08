<template>
    <div>

       <app-stock v-for="stock in stocks" :stock="stock" v-bind:key="stock.id"></app-stock>

    </div>


    
</template>

<script>
    import Stock from './Stock.vue';

    export default {
        components: {
            appStock: Stock
        },
        computed: {
            stocks() {
                return this.$store.getters.stocks;
            }
        }
    }
</script>