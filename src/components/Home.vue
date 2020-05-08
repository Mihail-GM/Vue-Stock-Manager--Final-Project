<template>
    <div class="home-text row"> 
        <h1>Trade or View your Portfolio</h1>
        <p>You may Save &  Load your Data 
            Click on 'End Day' to begin a new Dat!
        </p>
        <hr>

        <h5>Your Funds: $ {{ showMoney }}</h5>
    </div>
</template>


<script>
    export default {
        computed: {
            showMoney() {
                return this.$store.getters.funds;
            }
        }
    }
</script>


<style scoped>

.home-text {
        display: block;
        
       margin-top: 20px;
       border-style: solid;
       padding: 2%;
}

</style>