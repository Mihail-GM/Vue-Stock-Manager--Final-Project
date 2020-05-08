<template>
    <div class="container-fluid pl-5 pr-5">
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12">
                <br>
                <app-header></app-header>
                    <transition name="slide" mode="out-in">
                        <router-view class="row pl-5 pr-5"></router-view>
                    </transition>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from './components/header/Header.vue';
    export default {
        components: {
            appHeader: Header
        },
        created() {
            this.$store.dispatch('initStocks');
            console.log('created init stock');
        }
    }
</script>

<style>

    .slide-leave-active {
        transition: opacity 0.5s ease;
        opacity: 0;
        animation: slide-out 0.5s ease-out forwards;
    }

    .slide-leave {
        opacity: 1;
        transform: translateX(0);
    }

    .slide-enter-active {
        animation: slide-in 0.5s ease-out forwards;
    }

    @keyframes slide-out {
        0% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(-30px);
        }
    }

    @keyframes slide-in {
        0% {
            transform: translateY(-30px);
        }
        100% {
            transform: translateY(0);
        }
    }
</style>
